import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";


export class LogInGoogle extends Component{
    constructor(){
        super();
        this.state= {
            user:{}
        }; 
    this.handleAuth = this.handleAuth.bind(this);
    }


    handleAuth(e){
        e.preventDefault();
        const provider= new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            let user = result.user;
            return user;
        })
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

render(){
    return(
        <div class="ui orange button" onClick={this.handleAuth}>Iniciar con <i class="fab fa-google"></i>oogle</div>
        )
    }
}

export default LogInGoogle;