// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi3BU-KkgI9uveGftyzTjA7S6ICYFzIm8",
  authDomain: "climate-action-930da.firebaseapp.com",
  projectId: "climate-action-930da",
  storageBucket: "climate-action-930da.appspot.com",
  messagingSenderId: "1035243586293",
  appId: "1:1035243586293:web:d28f22b06ed26554ebfbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);