// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2y1v1IVprnlwcAwhiFVO8RvSOJGNUsbA",
  authDomain: "mipuntodeventa-86c0f.firebaseapp.com",
  projectId: "mipuntodeventa-86c0f",
  storageBucket: "mipuntodeventa-86c0f.appspot.com",
  messagingSenderId: "261711381195",
  appId: "1:261711381195:web:c24e043bef11f49570514e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);


export default appFirebase

