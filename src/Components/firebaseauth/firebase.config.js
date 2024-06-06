// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Exxfm4M3NSgraF5TVFC5ep7XfMzotDU",
  authDomain: "coffee-store-259fb.firebaseapp.com",
  projectId: "coffee-store-259fb",
  storageBucket: "coffee-store-259fb.appspot.com",
  messagingSenderId: "2850346111",
  appId: "1:2850346111:web:d73a983ca5ac9ff3889b4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;