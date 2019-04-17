import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import './App.css';
import store from './store';
import Home from './containers/Home';
import Profile from './containers/Profile';
import ProfileEdit from './containers/ProfileEdit';
import ProfileCreate from './containers/ProfileCreate';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit-profile" component={ProfileEdit} />
            <Route exact path="/create-profile" component={ProfileCreate} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
