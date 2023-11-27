import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase.js";

export const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
