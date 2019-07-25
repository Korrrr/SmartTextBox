import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SmartTextBox from './components/SmartTextBox.jsx';

import data from './fakeJson/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <SmartTextBox options={data || []} />
      </div>
    );
  }
}

export default App;
