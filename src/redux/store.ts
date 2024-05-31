import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './root.reducer';

let middlewares = [promise, thunk];
let combineMiddlewares;

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
  combineMiddlewares = compose(applyMiddleware(...middlewares));
} else {
  combineMiddlewares = applyMiddleware(...middlewares);
}

export const store = createStore(rootReducer, combineMiddlewares);

export default { store };
