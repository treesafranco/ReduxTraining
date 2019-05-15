import React, { Component } from 'react';

import Persons from './containers/Persons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <h3>This is a simple react redux application To add/remove Person</h3>
    
        <Persons />
      </div>
    );
  }
}

export default App;
