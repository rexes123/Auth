// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy0iyguYj1TW5z8beC2jX1k2k0YDk9LhM",
  authDomain: "promofoucs.firebaseapp.com",
  projectId: "promofoucs",
  storageBucket: "promofoucs.appspot.com",
  messagingSenderId: "533516753234",
  appId: "1:533516753234:web:a719cfc0bbfa6b0631028b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)