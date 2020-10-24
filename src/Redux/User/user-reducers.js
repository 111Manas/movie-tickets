import UserActionTypes from '../User/user-types';

const iState = {
  currentUser:null,
  error:null
}

const userReducer = (state=iState,action) => {
  switch(action.type) {
    case UserActionTypes.GOOGLE_SIGNIN_SUCCESS:
      return{
        ...state,
        currentUser:action.payload
      }
    case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
      return{
        ...state,
        error:action.payload
      }
      default:
        return state;
  }
}
export default userReducer;