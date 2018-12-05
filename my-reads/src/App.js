import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './App.css';

import Auxiliary from "./hoc/Auxiliary/Auxilary";
import BookShelf from "./components/BookShelf/BookShelf";
import Search from "./containers/Search/Search";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={ BookShelf }/>
        <Route path="/search" component={ Search }/>
      </Switch>
    )

    return (
      <Auxiliary>
        { routes }
      </Auxiliary>
    );
  }
}

export default withRouter(connect(null, null)(App));
