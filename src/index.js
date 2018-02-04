import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { store } from "./redux";
import Home from './pages/Home';
import "./index.css";

const rootEl = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>
), rootEl);
