import { combineReducers } from 'redux';
import { layoutReducer } from './layout/layout.reducer';
import { authReducer } from './auth/auth.reducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  auth: authReducer,
});

export default rootReducer;
