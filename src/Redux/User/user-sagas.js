import {takeLatest,all,call} from 'redux-saga/effects';

import UserActionTypes from '../User/user-types';
// import {googleSigninSuccess,googleSigninFailure} from './user-actions';
import {auth,googleProvider} from '../../components/Firebase/firebase.utils';

export function* signInWithGoogle() {
  try{
    const userRef = yield auth.signInWithPopup(googleProvider)
    console.log(userRef)
  }catch(error){
    
  }
}

export function* onGoogleSignInStart () {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START,signInWithGoogle)
};

export function* userSagas () {
  yield all ([
    call(onGoogleSignInStart)
  ])
};