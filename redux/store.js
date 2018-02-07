import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

const isProd = process.env.NODE_ENV === "production";
const composeEnhancers = isProd ? compose : composeWithDevTools;

const middleware = [thunk];

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ));
};
