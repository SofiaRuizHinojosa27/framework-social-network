import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";

class Feed extends Component{
    constructor(props){
        super(props);
        this.state= {
            users: this.props.user
        }; 
     
}

render(){
    return(
        <div>
            <img src={this.props.users.photoURL} alt={this.props.users.displayName}/>
            <p>Hola {this.props.users.displayName}!</p>
            <button className="btn"  onClick={this.handleLogout}>Log Out</button>
        </div> 
    )
}
}

export default Feed;