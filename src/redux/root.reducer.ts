import { combineReducers } from 'redux';
import { layoutReducer } from './layout/layout.reducer';
import { notificationReducer } from './notification/notification.reducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  notification: notificationReducer,
});

export default rootReducer;
