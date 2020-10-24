import {combineReducers} from 'redux';
import userReducer from './User/user-reducers';

const allReducer = combineReducers({
  user:userReducer
});

export default allReducer;