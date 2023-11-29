import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { ref, set, push, onValue, remove } from "firebase/database";

export const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userReservedCars, setUserReservedCars] = useState([]);
  const [allUserCarData, setAllUserCarData] = useState([]);

  const createUser = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const reserveCar = (carData) => {
    const userCarsRef = ref(db, `user_cars/${user.uid}`);
    const newCarRef = push(userCarsRef);
    set(newCarRef, carData);
  };

  const cancelReservation = (vehicle) => {
    // Find the car -- working
    const carToRemoveRef = userReservedCars.find(
      (car) => car.id === vehicle.id
    );

    // firebase key is undefined
    const carRef = ref(db, `user_cars/${user.uid}/${carToRemoveRef.key}`);

    if (carToRemoveRef) {
      console.log("Car ref", carRef);
      console.log("Firebase car Key:", carToRemoveRef.key);
      console.log("Vehicle:", vehicle);

      // Remove the car from the reference
      set(carRef, null)
        .then(() => {
          // Update the array -- working
          const updatedUserCars = userReservedCars.filter(
            (car) => car.id !== vehicle.id
          );
          setUserReservedCars(updatedUserCars);
        })
        .catch((error) => {
          console.error("Error removing car:", error);
        });
    }
  };

  useEffect(() => {
    if (user) {
      function fetchUserCars(userId) {
        const userCarsRef = ref(db, `user_cars/${userId}`);
        onValue(userCarsRef, (snapshot) => {
          if (snapshot.exists()) {
            const userCarsData = [];
            snapshot.forEach((childSnapshot) => {
              const key = childSnapshot.key;
              const carData = childSnapshot.val();
              userCarsData.push({ ...carData, key });
            });
            setUserReservedCars(userCarsData);
          } else {
            setUserReservedCars([]);
          }
        });
      }
      fetchUserCars(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const fetchAllUsersCars = () => {
        const allUsersCarsRef = ref(db, `user_cars`);

        onValue(allUsersCarsRef, (snapshot) => {
          const allUsersCarsData = snapshot.val();
          const allCars = [];

          if (allUsersCarsData) {
            Object.keys(allUsersCarsData).forEach((userId) => {
              const userCars = Object.values(allUsersCarsData[userId]);
              allCars.push(...userCars);
            });
          }

          setAllUserCarData(allCars);
        });
      };
      fetchAllUsersCars();
    }
  }, [user]);

  console.log("All users cars", allUserCarData);
  console.log("Current users cars", userReservedCars);

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        logOut,
        reserveCar,
        cancelReservation,
        user,
        userReservedCars,
        allUserCarData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
