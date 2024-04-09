// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nuUz6Acwil95AioTkB5Bde21RGLiqMI",
  authDomain: "netflixgpt-fa10c.firebaseapp.com",
  projectId: "netflixgpt-fa10c",
  storageBucket: "netflixgpt-fa10c.appspot.com",
  messagingSenderId: "1097843166087",
  appId: "1:1097843166087:web:2c4968cbbb55f023d36122",
  measurementId: "G-PVKDE5EK9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();