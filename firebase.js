import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjwjNY_rR7xmJg8EexWOCG6yvQ_6N8tJA",
  authDomain: "hydrosafe1.firebaseapp.com",
  projectId: "hydrosafe1",
  storageBucket: "hydrosafe1.firebasestorage.app",
  messagingSenderId: "1043551331115",
  appId: "1:1043551331115:web:c7a30ad4f995e2d1b49b6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};