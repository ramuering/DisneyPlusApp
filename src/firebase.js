// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgkHb5qwKlxOdKtR1_ZuIgNevcwCeoqr4",
  authDomain: "react-disney-plus-app-dad74.firebaseapp.com",
  projectId: "react-disney-plus-app-dad74",
  storageBucket: "react-disney-plus-app-dad74.appspot.com",
  messagingSenderId: "688966243035",
  appId: "1:688966243035:web:db278514957bd7ea85b2fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
