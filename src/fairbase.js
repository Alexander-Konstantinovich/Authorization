// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5vSNB3rGeMUuJw1VO-rPmGtGqeu8tfoo",
  authDomain: "fir-authorization-ce064.firebaseapp.com",
  projectId: "fir-authorization-ce064",
  storageBucket: "fir-authorization-ce064.appspot.com",
  messagingSenderId: "340560772014",
  appId: "1:340560772014:web:43317abb8b40d47b74663f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);