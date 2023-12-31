// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYO_31ABb4glTyfw0DX_MvI3ZRHycA-w",
  authDomain: "gki-group-project-af0a4.firebaseapp.com",
  databaseURL:
    "https://gki-group-project-af0a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gki-group-project-af0a4",
  storageBucket: "gki-group-project-af0a4.appspot.com",
  messagingSenderId: "57906651102",
  appId: "1:57906651102:web:a56cedd2f16f90861a474f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
