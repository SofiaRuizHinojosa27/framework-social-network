import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import './App.css';
import LogInGoogle from './components/LogInGoogle';
import Register from './components/Register';
import Veggie from './veggie.jpg';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            <h1 className="App-title">Veggie Community</h1>
            <img src={Veggie}/>
          </header>
        </Zoom>
        <LogInGoogle/>
        <Register/>
      </div>
    );
  }
}

export default Home;