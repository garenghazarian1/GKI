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

  function logUserCars() {
    const userCarsRef = ref(db, `user_cars/${user.uid}`);

    onValue(userCarsRef, (snapshot) => {
      if (snapshot.exists()) {
        const userCars = snapshot.val();
        console.log("User's reserved cars:", userCars);
      } else {
        console.log("No reserved cars found for the user.");
      }
    });
  }

  logUserCars();

  return (
    <UserContext.Provider
      value={{ createUser, signIn, logOut, reserveCar, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
