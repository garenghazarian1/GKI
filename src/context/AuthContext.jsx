import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { ref, set, push, onValue } from "firebase/database";

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
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function reserveCar(carData) {
    const userCarsRef = ref(db, `user_cars/${user.uid}`);
    const newCarRef = push(userCarsRef);
    set(newCarRef, carData);
  }
  useEffect(() => {
    if (user) {
      function fetchUserCars(userId) {
        const userCarsRef = ref(db, `user_cars/${userId}`);

        onValue(userCarsRef, (snapshot) => {
          if (snapshot.exists()) {
            const userCarsData = snapshot.val();
            const cars = Object.values(userCarsData);
            setUserReservedCars(cars);
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

  console.log(allUserCarData);
  console.log(userReservedCars);

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        logOut,
        reserveCar,
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
