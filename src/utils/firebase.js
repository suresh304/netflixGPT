// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlDLWugVcyd8etNfSkA6tOBTaBTeLQ7PQ",
  authDomain: "netflixgpt-cb468.firebaseapp.com",
  projectId: "netflixgpt-cb468",
  storageBucket: "netflixgpt-cb468.appspot.com",
  messagingSenderId: "563580627180",
  appId: "1:563580627180:web:b128df791893a74904ddc9",
  measurementId: "G-52YLKTDEZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()