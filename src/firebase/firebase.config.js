// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFDrsEMvFS734XDEV-uJcY-VnpkmuEf_E",
    authDomain: "ema-john-auth-bf93b.firebaseapp.com",
    projectId: "ema-john-auth-bf93b",
    storageBucket: "ema-john-auth-bf93b.appspot.com",
    messagingSenderId: "312620064359",
    appId: "1:312620064359:web:5cae300c2941f756e63ec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;