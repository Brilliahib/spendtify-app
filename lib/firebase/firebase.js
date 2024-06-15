import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJgMRHpDO6ab7QASBzjgMj-DEW8ddvvmU",
  authDomain: "spendtify.firebaseapp.com",
  projectId: "spendtify",
  storageBucket: "spendtify.appspot.com",
  messagingSenderId: "664693626723",
  appId: "1:664693626723:web:2ad73eeec97e1ef690a556",
  measurementId: "G-NTQVRZE8LT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
