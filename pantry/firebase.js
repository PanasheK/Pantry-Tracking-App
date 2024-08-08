// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXaFWVIRSC3OOp7kjynWWlcttNZzWYfY",
  authDomain: "hspantry-8aff4.firebaseapp.com",
  projectId: "hspantry-8aff4",
  storageBucket: "hspantry-8aff4.appspot.com",
  messagingSenderId: "564736640339",
  appId: "1:564736640339:web:0e1ccd663fb8c44636cda6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{ app,firestore}