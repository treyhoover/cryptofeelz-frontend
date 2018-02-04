import { createStore, applyMiddleware, compose } from 'redux'
import { responsiveStoreEnhancer } from 'redux-responsive'
import thunk from 'redux-thunk'
import reducer from './reducers'

const isProd = process.env.NODE_ENV === "production";
const composeEnhancers = (!isProd && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = [thunk];

export const store = createStore(reducer, composeEnhancers(
  responsiveStoreEnhancer,
  applyMiddleware(...middleware),
));
