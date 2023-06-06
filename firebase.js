// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkKyR_IoNx6vw11DeLjXD0ls2HnS9m3Ic",
  authDomain: "it-project-auth.firebaseapp.com",
  projectId: "it-project-auth",
  storageBucket: "it-project-auth.appspot.com",
  messagingSenderId: "655138292971",
  appId: "1:655138292971:web:824d78c8a4927956002aae"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };