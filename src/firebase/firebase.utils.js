import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBHfzcmoiXg8Dv1yFbnQLpcU0fBRpZ9b3A",
  authDomain: "podcasts-dragomir.firebaseapp.com",
  projectId: "podcasts-dragomir",
  storageBucket: "podcasts-dragomir.appspot.com",
  messagingSenderId: "222846916338",
  appId: "1:222846916338:web:926a728ec3de588547a26b",
  measurementId: "G-8V6SGFD4HK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export {auth, db}