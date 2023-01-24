// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBTar3RLNrLnxT2SwO5fbkv-oR601RwSho",
  authDomain: "space-sojourn-llc.firebaseapp.com",
  projectId: "space-sojourn-llc",
  storageBucket: "space-sojourn-llc.appspot.com",
  messagingSenderId: "456449315514",
  appId: "1:456449315514:web:f43e9544891bd1ac6de883",
  measurementId: "G-97X9GBQLB4"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);