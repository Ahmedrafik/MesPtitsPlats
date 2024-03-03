// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq3Ltmyd1xLbYLXK2NtESsGO2HgmAOztI",
    authDomain: "mesptitsplats-7c3eb.firebaseapp.com",
    projectId: "mesptitsplats-7c3eb",
    storageBucket: "mesptitsplats-7c3eb.appspot.com",
    messagingSenderId: "979698512218",
    appId: "1:979698512218:web:e86ab1a4c8edffc3a28363"
};

// Initialize Firebase
export const FIREBASE_APP= initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);