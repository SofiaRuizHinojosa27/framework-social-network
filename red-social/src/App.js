import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { LogInGoogle } from "./components/LogInGoogle";
import { Feed } from "./components/Feed";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">

      <div className="App">
      <Route exact path="/" render={()=><Home/>} />
      <Route path="/LogInGoogle" render={()=><LogInGoogle/>}/>
      <Route path="/Feed" render={()=><Feed/>}/>
      </div>

      </HashRouter>
          );
        }
      }

export default App;
