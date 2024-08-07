import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "netflixandgpt.firebaseapp.com",
  projectId: "netflixandgpt",
  storageBucket: "netflixandgpt.appspot.com",
  messagingSenderId: "1005584435242",
  appId: "1:1005584435242:web:7fd76717e157058f63db53",
  measurementId: "G-HLZD4FWKF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("app->",app)

export const auth = getAuth();