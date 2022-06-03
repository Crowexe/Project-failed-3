// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHtyjWbhOO6dbz7Z0UTRmD1WM6C1sSDg",
  authDomain: "fly-me-to-the-moon-13c2d.firebaseapp.com",
  projectId: "fly-me-to-the-moon-13c2d",
  storageBucket: "fly-me-to-the-moon-13c2d.appspot.com",
  messagingSenderId: "1020385234720",
  appId: "1:1020385234720:web:c4e5ffcfb26ba81063d145"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);