// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR2a6eyV17PWDYfXeGT38pF5bjZk6EKOM",
  authDomain: "chat--firebase-7631c.firebaseapp.com",
  projectId: "chat--firebase-7631c",
  storageBucket: "chat--firebase-7631c.appspot.com",
  messagingSenderId: "77080339933",
  appId: "1:77080339933:web:991f91e1152161ad9c0234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);