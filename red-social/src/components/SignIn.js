import React, {Component} from "react";
import '../App.css';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import VeggieNav from '../veggieNav.jpg';
import firebase from "../config/config";
import LogInGoogle from "./LogInGoogle";

	

export class SignIn extends Component{
	    constructor(){
	        super();
	        this.state = {
	            email: '',
				password: ''
				
	        }
	        this.handleChange = this.handleChange.bind(this);
	        this.login = this.login.bind(this);
        }

handleChange = (e) => {
	this.setState({
	[e.target.id]: e.target.value,
	});
}
	

login(e){
	e.preventDefault();
	firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert("Lo sentimos algo ha salido mal: " + errorMessage);
		// ...
		});
};	

render() {	
	return(
		
	<div className="SignIn">

			<div className="App">
        		<Zoom>{/*Using Zoom Effect*/}
         		<header className="App-header">
           		 <h1 className="App-title">Veggie Community</h1>
            	 <img src={VeggieNav} alt=""/>
         		</header>
        		</Zoom>
        	</div>
			<br/>

		<div class="ui big form">
  				<div class="two fields">
    			<div class="field">
      				<label>Email</label>
      				<input placeholder="Email" type="text" onChange={this.handleChange}/>
    			</div>
    			<div class="field">
      				<label>Contraseña</label>
      				<input placeholder="Contraseña" type="password" onChange={this.handleChange}/>
    			</div>
  			</div>
			    <a className="form-check-label" href="/#/SignIn">
	            	No tienes una cuenta ¡Unete!
	            </a>
		</div>
		<br/>

		<div class="inline">
            <div class="ui orange button" onClick={this.login}>Iniciar Sesión</div>
            <div class="ui orange button"><LogInGoogle user={this.props}/></div>
        </div>
	</div>
	        )
	}
}	

	export default SignIn;
