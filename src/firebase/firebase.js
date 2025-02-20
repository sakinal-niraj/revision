// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getauth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZvStT3UsWaRF2VCff9Zgemg1lUzRacJg",
  authDomain: "questionbank-ffb48.firebaseapp.com",
  projectId: "questionbank-ffb48",
  storageBucket: "questionbank-ffb48.firebasestorage.app",
  messagingSenderId: "477742068905",
  appId: "1:477742068905:web:b00e1738dca5c2416ce5b8",
  measurementId: "G-7LP2Y0KYS8"
};

const app = initializeApp(firebaseConfig);
const auth = getauth(app);


export {app,auth};