// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-645d9.firebaseapp.com",
  projectId: "mern-estate-645d9",
  storageBucket: "mern-estate-645d9.appspot.com",
  messagingSenderId: "880110772485",
  appId: "1:880110772485:web:2b1f0b08107e9a229a976c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);