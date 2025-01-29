
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSYvQ-NGdOBDbZNO_vB0Ocw9HrDI2YRM",
  authDomain: "ecommerce-b2173.firebaseapp.com",
  projectId: "ecommerce-b2173",
  storageBucket: "ecommerce-b2173.firebasestorage.app",
  messagingSenderId: "744078653903",
  appId: "1:744078653903:web:1e19587ac0df47e7ec7aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

