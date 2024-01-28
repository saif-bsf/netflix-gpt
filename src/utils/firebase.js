// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPTj4CsgzyB8Q6dWlK9IOzRW7beFJHlLw",
  authDomain: "netflixgpt-967db.firebaseapp.com",
  projectId: "netflixgpt-967db",
  storageBucket: "netflixgpt-967db.appspot.com",
  messagingSenderId: "77210277434",
  appId: "1:77210277434:web:952b2a97d5156486314703",
  measurementId: "G-VVT4RKGB26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
