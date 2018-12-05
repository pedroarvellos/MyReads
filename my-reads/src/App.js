import React, { Component } from 'react';
import classes from './App.css';

import Auxiliary from "./hoc/Auxiliary/Auxilary"

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <div>First Component</div>
        <div>Second Component</div>
      </Auxiliary>
    );
  }
}

export default App;
