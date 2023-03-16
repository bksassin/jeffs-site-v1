// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzzHo4KRxh7N45rzX-QM_cVCdc0p833Xs",
  authDomain: "jeffs-site-252f1.firebaseapp.com",
  projectId: "jeffs-site-252f1",
  storageBucket: "jeffs-site-252f1.appspot.com",
  messagingSenderId: "359086174110",
  appId: "1:359086174110:web:c2244c45ed2f99ccfc708f",
  measurementId: "G-K2J3JHGWDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);