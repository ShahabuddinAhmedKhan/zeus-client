// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNPNLEX9l466MvDmUQ_mQ4dsCH9LLmhzI",
  authDomain: "zeus-73056.firebaseapp.com",
  projectId: "zeus-73056",
  storageBucket: "zeus-73056.firebasestorage.app",
  messagingSenderId: "693250159182",
  appId: "1:693250159182:web:6db62abbe43458d454c91f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);