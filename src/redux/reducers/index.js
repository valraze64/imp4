import { combineReducers } from 'redux';
import reducer from './reducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  data: reducer,
  auth: authReducer,
  // ...existing code...
});

export default rootReducer;
