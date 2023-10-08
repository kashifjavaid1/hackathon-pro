
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "student-50c91.firebaseapp.com",
  projectId: "student-50c91",
  storageBucket: "student-50c91.appspot.com",
  messagingSenderId: "779038227957",
  appId: "1:779038227957:web:779d354b2c7d900e5df4bc",
  measurementId: "G-47WK8R5NY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);