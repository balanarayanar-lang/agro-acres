// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcvB1EymSM26h4nMdMHfb4DIPiZ6PN-bs",
  authDomain: "agro-acres-f39f4.firebaseapp.com",
  projectId: "agro-acres-f39f4",
  storageBucket: "agro-acres-f39f4.firebasestorage.app",
  messagingSenderId: "235978444867",
  appId: "1:235978444867:web:bf5be4ec4208e8262e84f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
