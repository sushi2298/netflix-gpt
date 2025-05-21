// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANcF_2rlpkHwYpnb4IiaYh7no2UlVy3bY",
  authDomain: "netflixgpt-5e9bc.firebaseapp.com",
  projectId: "netflixgpt-5e9bc",
  storageBucket: "netflixgpt-5e9bc.firebasestorage.app",
  messagingSenderId: "47772097870",
  appId: "1:47772097870:web:2af9e3ceb5d904a763121f",
  measurementId: "G-NBTP7BMNWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();