// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpeAzmcHrpF5mO7vRi0UfHVIexsrwJl3E",
  authDomain: "netflixgpt-9da60.firebaseapp.com",
  projectId: "netflixgpt-9da60",
  storageBucket: "netflixgpt-9da60.appspot.com",
  messagingSenderId: "256039165340",
  appId: "1:256039165340:web:afc968ea5ad5e758d9bc59",
  measurementId: "G-B52PCJQ60S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
