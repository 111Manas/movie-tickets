import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjwckANhgHR2Si53872Pa_rzHX9Oz0UNo",
  authDomain: "facebouk-2233d.firebaseapp.com",
  databaseURL: "https://facebouk-2233d.firebaseio.com",
  projectId: "facebouk-2233d",
  storageBucket: "facebouk-2233d.appspot.com",
  messagingSenderId: "1089303638520",
  appId: "1:1089303638520:web:877ddfe462e13d1fa2260d",
  measurementId: "G-WMJ8HRSCYQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {email,password} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        password,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log('error.message')
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;