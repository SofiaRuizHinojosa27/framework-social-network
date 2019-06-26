import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";
import Veggie from '../veggie.jpg';
import {Link} from "react-router-dom";

export class Register extends Component{
    constructor(){
	    super();
	    this.state = {
            displayName: '',
	        email: '',
            password: '',
            ciudad:''
	        }
	this.handleChange = this.handleChange.bind(this);
    this.loginWithEmail = this.loginWithEmail.bind(this);
	}
	

handleChange = (e) => {
	this.setState({
	    [e.target.id]: e.target.value,
	    });
}
	

loginWithEmail(e){
	e.preventDefault();
	    const displayName = this.state.displayName;
	    const email = this.state.email;
        const password = this.state.password;
        const ciudad =this.state.ciudad;
        firebase.auth().createUserWithEmailAndPassword(email, password)
	    .then(function(){
	        const user = firebase.auth().currentUser;
	        user.updateProfile({
            displayName: displayName,
            ciudad: ciudad
	        })
        })
	    .catch(function(error) {
	         console.log(error);
	    });
}
    render(){
        return(
            
            <div class="ui placeholder segment">
                <h1>Ingresa tus datos de registro</h1>
                <br/>
                <div class="ui two column very relaxed stackable grid">
                    <div class="column">
                    <div class="ui center aligned form">
                    <div class="field">
                        <label>Nombre</label>
                        <div class="ui left icon input">
                            <input type="text" placeholder="Usuario" onChange={this.handleChange} id="displayName"/>
                            <i class="user icon"></i>
                        </div>
                        <div class="field">
                        <label>Email</label>
                        <div class="ui left icon input">
                            <input type="text" placeholder="Email" onChange={this.handleChange} id="email"/>
                            <i class="mail icon"></i>
                        </div>
                        <div class="field">
                        <label>Contraseña</label>
                        <div class="ui left icon input">
                            <input type="password" onChange={this.handleChange} id="password"/>
                            <i class="lock icon"></i>
                        </div>
                        </div>
                        <div class="field">
                        <label>Ciudad</label>
                        <div class="ui left icon input">
                            <input type="text" onChange={this.handleChange} id="ciudad"/>
                        </div>
                        </div>
                        <div class="ui orange submit button" onClick={this.loginWithEmail}>Registrate!</div>
                        <br/>
                        <div class="ui orange submit button"><Link to="/">Si estas registrado</Link></div>
                    </div>
                    </div>
                </div>
            </div>
            <img src={Veggie} alt=""/>
            </div>
            </div>
            
        )
    }
}

export default Register;


