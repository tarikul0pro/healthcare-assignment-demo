import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const FirebaseInitialization = () => {
  return initializeApp(firebaseConfig);
};

export default FirebaseInitialization;
