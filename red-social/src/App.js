import React, { Component } from 'react';
import './App.css';
import firebase from "./config/config";
import { HashRouter, Route, Link } from "react-router-dom";
import { Register } from "./components/Register";
import {Profile} from "./components/Profile";
import { SignIn } from "./components/SignIn";
import { Feed } from "./components/Feed";

class App extends Component {
  constructor(){
    super();
    this.state={
      user:{},
      userDB:{}
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
        if(user.displayName === null){
          this.setState({
            userDB: {
              email: user.email,
              photo: user.photoURL,
              name: user.displayName
            }
          })
        }else{
          this.setState({ 
            userDB: {
              email: user.email,
              photo: user.photoURL,
              name: user.displayName
            }
          })
        }
      }else{
        this.setState({user: null});
      }
    })
  }


  render() {
    return (
      <HashRouter basename="/">

      <div className="App">
      <Route exact path="/" render={() => this.state.user ? (<Feed user={this.state.user}/>) : (<SignIn userDB={this.state.userDB}/>)}/>
      <Route path="/SignIn" render={ () => this.state.user ? (<Feed  user={this.state.user}/>) : (<Register userBD={this.state.userDB}/>)} />
      <Route path="/Profile" render={() => <Profile user = {this.state.userDB}/>}/>
      <Route path="/Feed" render={() => <Feed/>}/>
      <Route path="/Register" render={() => <Register/>}/>

      </div>

      </HashRouter>
          );
        }
      }

export default App;
