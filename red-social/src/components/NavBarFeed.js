import React, {Component} from "react";
import '../App.css';
import firebase from "../config/config";
import VeggieNav from '../veggieNav.jpg';
import {Link} from "react-router-dom";
	

class NavBarFeed extends Component{
	constructor(){
	    super();
	    this.logOut = this.logOut.bind(this);
	}
	

logOut(e){
	 e.preventDefault();
     firebase.auth().signOut()
     .then(result => console.log(`${result.user.email} ha cerrado sesión`))
     .catch(error => console.log(`Error ${error.code}: ${error.message}`));   
}
	

	    render(){
	        return(
            
                
                <div class="ui stackable menu">
                    
                    <div class="item"><Link to="/"><img alt="" src={VeggieNav} /></Link></div>
                        <a class="item"><Link to="/Profile">Perfil <span className="sr-only">(current)</span></Link></a>
                        <a class="item"><Link to="/Feed">Muro<span className="sr-only">(current)</span></Link></a>
                        <a class="item" onClick={this.logOut}><Link to="/">Cerrar sesion<span className="sr-only">(current)</span></Link></a>
                </div>
               
             
	        )
	    }
	}
	

	export default NavBarFeed;
