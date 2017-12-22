import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'),
);
