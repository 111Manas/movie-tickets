import UserActionTypes from '../User/user-types';

export const googleSigninStart = () =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_START
  }
};

export const googleSigninSuccess = (user) =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload:user
  }
};

export const googleSigninFailure = (error) =>{
  return{
    type:UserActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload:error
  }
};