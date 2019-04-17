import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import './App.css';
import store from './store';
import Home from './containers/Home';
import Profile from './containers/Profile';
import EditProfile from './containers/EditProfile';
import CreateProfile from './containers/CreateProfile';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
