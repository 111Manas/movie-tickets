import {all,call,put,takeLatest} from 'redux-saga/effects';
import {signInSuccess,signInFailure,signUpSuccess,signUpFailure,signOutSuccess,signOutFailure} from './user-actions';
import {auth,createUserProfileDocument} from '../../components/Firebase/firebase';
import UserActionTypes from './user-types';


export function* getSnapshotFromUserAuth(userAuth,additionalData){
  try{
    const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
    const userSnapshot = yield userRef.get();
    yield put (signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
  }catch(error){
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail ({payload:{email,password}}) {
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromUserAuth(user);
  }catch(error){
    yield put (signInFailure(error));
    alert ("User doesn't Registered")
  }
};

export function* onEmailSignInStart () {
  yield takeLatest(UserActionTypes.SIGN_IN_START,signInWithEmail)
};

export function* signUp ({payload:{email,password,displayName}}){
  try{
    const {user} = yield auth.createUserWithEmailAndPassword(email,password);
    yield put (signUpSuccess({user,additionalData:{displayName}}))
  }catch(error){
   yield put(signUpFailure(error))
  }
} 

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* signOut (){
  try{
     yield auth.signOut();
    yield put (signOutSuccess());
  }catch(error){
    yield put (signOutFailure(error))
  }
}

export function* onSignOutStart (){
  yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* userSagas () {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onEmailSignInStart),
    call(onSignOutStart)
  ])
}