import React, { Component } from 'react';
import logo from './logo.svg';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Zoom>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
