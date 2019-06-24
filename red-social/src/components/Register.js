import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";
import Feed from './Feed';

class RegisterWithEmail extends Component{
    constructor(){
        super();
        this.state= {
            user:null
        }; 

    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
    }    

    LoginWithEmail(email, password) {
        //I sign in to an existing account with email and password
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() =>
          <Feed/>
        )
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Something went wrong :( " + errorMessage);
        // ...
        });
      }

    RegisterWithEmail(email, password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Something went wrong :( " + errorMessage);
          });
    }  

    saveData(uid, email, password){
        let user = {
            nombre: document.getElementById('name').value,
            apellido: document.getElementById('lastName').value,
            ciudad: document.getElementById('city').value,
            email: email,
            password: password,
            }
    //Dentro de mi rama de usuarios, guardo el usuario con su uid
    firebase.database().ref("users/" + uid).set(user);
        }

    handleLogout(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha cerrado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }
    render(){
        return(
            <div class="ui placeholder segment">
                <div class="ui two column very relaxed stackable grid">
                    <div class="column">
                    <div class="ui form">
                        <div class="field">
                        <label>Username</label>
                        <div class="ui left icon input">
                            <input type="text" placeholder="Username" email={this.props.mail}/>
                            <i class="user icon"></i>
                        </div>
                        <div class="field">
                        <label>Password</label>
                        <div class="ui left icon input">
                            <input type="password" password={this.props.password}/>
                            <i class="lock icon"></i>
                        </div>
                        </div>
                        <div class="ui blue submit button">Login</div>
                    </div>
                    </div>
                    <div class="middle aligned column">
                    <div class="ui big button">
                        <i class="signup icon"></i>
                        Sign Up
                    </div>
                    </div>
                </div>
                <div class="ui vertical divider">
                    Or
                </div>
            </div>
            </div>
        )
    }
}

export default RegisterWithEmail;


