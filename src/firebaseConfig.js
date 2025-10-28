// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwshXAeuT-_JcPQaOiHaL8AjeVmsxgsyo",
  authDomain: "redstore-85eae.firebaseapp.com",
  projectId: "redstore-85eae",
  storageBucket: "redstore-85eae.firebasestorage.app",
  messagingSenderId: "1066732763955",
  appId: "1:1066732763955:web:109f687c35f4c8b4b9dc46",
  measurementId: "G-YGR8XDN510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };