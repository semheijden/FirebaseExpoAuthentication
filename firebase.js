// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARa0VFTLC-FR_XBH14wVQ2JEVhQczgP4Y",
  authDomain: "diary-fd993.firebaseapp.com",
  projectId: "diary-fd993",
  storageBucket: "diary-fd993.appspot.com",
  messagingSenderId: "77435039072",
  appId: "1:77435039072:web:eb570d81a3d69a832a0205",
  measurementId: "G-JXXR722042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);