import { combineReducers } from 'redux';
import { USER_LOGOUT } from '../action/user/type';
import { userReducer } from './user';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
