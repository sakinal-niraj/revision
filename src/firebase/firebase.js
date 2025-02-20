// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDZvStT3UsWaRF2VCff9Zgemg1lUzRacJg",
  authDomain: "https://revision-drab.vercel.app/",
  projectId: "questionbank-ffb48",
  storageBucket: "questionbank-ffb48.appspot.com",
  messagingSenderId: "477742068905",
  appId: "1:477742068905:web:b00e1738dca5c2416ce5b8",
  measurementId: "G-7LP2Y0KYS8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { app, auth };
