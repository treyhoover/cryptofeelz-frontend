import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { store } from "./redux";
import Home from './pages/Home';
import "./index.css";

const rootEl = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feelz/:id" component={Home} />
      </Switch>
    </Router>
  </Provider>
), rootEl);
