import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";

class RegisterWithEmail extends Component{
    constructor(){
        super();
        this.state= {
            user:null
        }; 

    }

    render(){
        return(
            <div className="btnRegister">
                <p>{this.renderLoginButton()}</p>

            </div>
        )
    }
}

export default RegisterWithEmail;


