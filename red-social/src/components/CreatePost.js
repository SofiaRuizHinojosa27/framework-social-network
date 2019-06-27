import React, {Component} from "react";
import '../App.css';
import firebase from "../config/config";

export class CreatePost extends Component{
  constructor(props){
    super(props);
    this.state={
        user: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.publishPost = this.publishPost.bind(this)
}


handleChange(e){
    this.setState({
        [e.target.id]: e.target.value,
      });
}


publishPost(){
    const userId = firebase.auth().currentUser.uid;
    const user = firebase.auth().currentUser;
    const userName = user.displayName;
    const messagePost = this.state.messagePost;
    const photo = user.photoURL;
    const post ={
        autor: userName,
        contenido: messagePost,
        foto: photo
    };
    const postKey = firebase.database().ref("users/" + userId).child("post").push().key;
    var updates = {};
    updates['/posts/' + postKey] = post;
    updates['/user-posts/' + userId + '/' + postKey] = post;
    firebase.database().ref().update(updates);
    this.setState({ messagePost: ""})

}


render(){
    console.log(this.props.infoUser)
    return(
        
        <div class="ui tall stacked segment">
          <div class="ui items">
            <div class="item">
              <div class="ui small image">
                <img src={this.props.infoUser.photoURL}/>
              </div>
              <div class="middle aligned content">
                <div class="header">
                {this.props.infoUser.displayName}
                <br/>
                <input type="text" id="messagePost" onChange={this.handleChange} placeholder="¿Qué deseas compartir?"/>
                </div>
              </div> 
              <br/> 
              </div>
              <div class="extra">
                <div class="ui right floated button" onClick={this.publishPost}>
                  Publicar
              </div>
              </div>
          </div>
      </div>
      
    )
}
}


export default CreatePost;
