// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID ,
// };

export const fi_firebaseConfig = {
  apiKey: "AIzaSyBL2VbPoEU9c3-ujkX2duE7bg2MyUaDoyU",
  authDomain: "reactlogin1-c98e3.firebaseapp.com",
  projectId: "reactlogin1-c98e3",
  storageBucket: "reactlogin1-c98e3.appspot.com",
  messagingSenderId: "862440370869",
  appId: "1:862440370869:web:209ba4b27c179f6c7744fc",
  measurementId: "G-YD1E2RLMBZ"

};

// Initialize Firebase
export const app = initializeApp(fi_firebaseConfig);
export const storage = getStorage(app);
