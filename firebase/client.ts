// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7s_k51JbFUr3rXJODSiVGZBC9WcLOTUo",
  authDomain: "interviewai-f0fab.firebaseapp.com",
  projectId: "interviewai-f0fab",
  storageBucket: "interviewai-f0fab.firebasestorage.app",
  messagingSenderId: "317295013683",
  appId: "1:317295013683:web:f7c2346e439889d62f1846",
  measurementId: "G-KPNS9FVR68"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();


export const auth  = getAuth(app);
export const db = getFirestore(app)