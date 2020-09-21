import UserActionTypes from './user-types';

const iState ={
  currentUser:null,
  error:null
}

const userReducer = (state=iState,action) =>{
  switch(action.type){
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
      default:
        return state;
  }
}
export default userReducer;