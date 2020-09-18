import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWtXb1_vh3hJhppvT_vbHodG7czFf0MuY",
  authDomain: "simple-web-ca305.firebaseapp.com",
  databaseURL: "https://simple-web-ca305.firebaseio.com",
  projectId: "simple-web-ca305",
  storageBucket: "simple-web-ca305.appspot.com",
  messagingSenderId: "1021839689871",
  appId: "1:1021839689871:web:95c6b099a07e0d81f048fa",
  measurementId: "G-VYGCY2VZG7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
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