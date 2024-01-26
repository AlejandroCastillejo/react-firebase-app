// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkvTiz6cY08hw2m--Rkh2J63PI4ecAiA",
  authDomain: "react-firebase-app-c0f2a.firebaseapp.com",
  databaseURL:
    "https://react-firebase-app-c0f2a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-firebase-app-c0f2a",
  storageBucket: "react-firebase-app-c0f2a.appspot.com",
  messagingSenderId: "449256235889",
  appId: "1:449256235889:web:876543300b37958e57ccd0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
