// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRa-BM8mkB7SXLTZslWkqXbqeUvKSeMcg",
  authDomain: "fir-auth-97707.firebaseapp.com",
  projectId: "fir-auth-97707",
  storageBucket: "fir-auth-97707.appspot.com",
  messagingSenderId: "995431788481",
  appId: "1:995431788481:web:24236f8f1eb04b1f51c940",
  measurementId: "G-HPFY68LP15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)