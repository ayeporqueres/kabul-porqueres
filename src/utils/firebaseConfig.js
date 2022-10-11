// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1IZl2j5IJzcSpt2zTqGGwxXdYPD_6oo",
  authDomain: "kabul-1d1da.firebaseapp.com",
  projectId: "kabul-1d1da",
  storageBucket: "kabul-1d1da.appspot.com",
  messagingSenderId: "1055015617940",
  appId: "1:1055015617940:web:ba3123a922b6bf2da7bb81"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}