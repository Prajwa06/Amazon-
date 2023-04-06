// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANTWlSN_qbqC-IWndeBI2v0tlITXqGLGw",
  authDomain: "fir-3706f.firebaseapp.com",
  projectId: "fir-3706f",
  storageBucket: "fir-3706f.appspot.com",
  messagingSenderId: "214485882898",
  appId: "1:214485882898:web:f8e76c1fdf06a38ea3e0cb",
  measurementId: "G-K1CT193Z72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db=getFirestore(app);
export {auth,provider,db};