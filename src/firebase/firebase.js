import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhmsPMdoWTrFB2AozeINi0TvvyUUswBQw",
  authDomain: "facebuuk-px.firebaseapp.com",
  databaseURL: "https://facebuuk-px.firebaseio.com",
  projectId: "facebuuk-px",
  storageBucket: "facebuuk-px.appspot.com",
  messagingSenderId: "886944728418",
  appId: "1:886944728418:web:72e9b7a1ebe6d9ce8e583b",
  measurementId: "G-83WTN11B45"
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