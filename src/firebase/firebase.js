// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BPfXgt2NcM1pbZDMRY90-wuaju2eW0s",
  authDomain: "assignment-11-aa198.firebaseapp.com",
  projectId: "assignment-11-aa198",
  storageBucket: "assignment-11-aa198.firebasestorage.app",
  messagingSenderId: "104766399212",
  appId: "1:104766399212:web:446a1dde585059e4b5bbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth