import UserActionTypes from './user-types';

const iState ={
  currentUser:null
}

const userReducer = (state=iState,action) =>{
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
      default:
        return state;
  }
}
export default userReducer;