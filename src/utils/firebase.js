// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACZAt2yoNT_6M5bfx5PQY-ziSwlJaBhDA",
  authDomain: "netflexgpt-bce56.firebaseapp.com",
  projectId: "netflexgpt-bce56",
  storageBucket: "netflexgpt-bce56.appspot.com",
  messagingSenderId: "225215044440",
  appId: "1:225215044440:web:1c3919cb6ea0aeaa24e32d",
  measurementId: "G-GLX5C4JLBQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
