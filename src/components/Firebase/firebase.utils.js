import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEz61hLg-d_aRGQQBpKPmhNR14e1bKEfQ",
  authDomain: "movie-tickets-c2e29.firebaseapp.com",
  databaseURL: "https://movie-tickets-c2e29.firebaseio.com",
  projectId: "movie-tickets-c2e29",
  storageBucket: "movie-tickets-c2e29.appspot.com",
  messagingSenderId: "113677718431",
  appId: "1:113677718431:web:89071ab739ba11aa44e3aa",
  measurementId: "G-37CYN5T9KN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase;
