// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdoiQ7N5zgx0-kfadNRWckUGzOdsTJPWo",
  authDomain: "shopping-list-felipeheredia.firebaseapp.com",
  projectId: "shopping-list-felipeheredia",
  storageBucket: "shopping-list-felipeheredia.appspot.com",
  messagingSenderId: "528453282493",
  appId: "1:528453282493:web:fb3aa6511ba59656bc25d4",
  measurementId: "G-QW2H9ERPT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
