// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkPZ2v3_CbfIyWp_AVZqURJqv4OJop940",
  authDomain: "h-firebase-2900c.firebaseapp.com",
  projectId: "h-firebase-2900c",
  storageBucket: "h-firebase-2900c.appspot.com",
  messagingSenderId: "577675587791",
  appId: "1:577675587791:web:aaa404e87f2f0d2d1ec7ba",
  measurementId: "G-NJVMLH68PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const purvi = getFirestore(app);