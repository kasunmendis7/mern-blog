// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b605c.firebaseapp.com",
  projectId: "mern-blog-b605c",
  storageBucket: "mern-blog-b605c.appspot.com",
  messagingSenderId: "376992113646",
  appId: "1:376992113646:web:422bc1dd9870ca669864ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);