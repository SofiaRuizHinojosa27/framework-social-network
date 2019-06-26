import React, {Component} from "react";
import '../App.css';
import firebase from "../config/config";

export class CreatePost extends Component{
	constructor(props){ 
	    super(props);
	    this.state={
	        user:{}
	    }
	this.handleChange = this.handleChange.bind(this);
	this.sendPostToFirebase = this.sendPostToFirebase.bind(this)
	}
	

handleChange(e){
	this.setState({
	[e.target.id]: e.target.value,
	});
}
	

sendPostToFirebase(){
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
	let updates = {};
	    updates['/posts/' + postKey] = post;
	    updates['/user-posts/' + userId + '/' + postKey] = post;
	    firebase.database().ref().update(updates);
	    this.setState({ messagePost: ""})
}
	

render(){
	
	    return(
            <div class="ui feed">
            <div class="event">
              <div class="label"><img src="/images/avatar/small/elliot.jpg" /></div>
              <div class="content">
                <div class="summary">
                  <a class="user">Elliot Fu</a>
                  added you as a friend
                  <div class="date">1 Hour Ago</div>
                </div>
                <div class="meta">
                  <a class="like">
                    <i aria-hidden="true" class="like icon"></i>
                    4 Likes
                  </a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="label"><img src="/images/avatar/small/helen.jpg" /></div>
              <div class="content">
                <div class="summary">
                  <a>Helen Troy</a>
                  added
                  <a>2 new illustrations</a>
                  <div class="date">4 days ago</div>
                </div>
                <div class="images extra">
                  <a><img src="/images/wireframe/image.png" /></a>
                  <a><img src="/images/wireframe/image.png" /></a>
                </div>
                <div class="meta">
                  <a class="like">
                    <i aria-hidden="true" class="like icon"></i>
                    1 Like
                  </a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="label"><img src="/images/avatar/small/jenny.jpg" /></div>
              <div class="content">
                <div class="summary">
                  <a class="user">Jenny Hess</a>
                  add you as a friend
                  <div class="date">2 Days Ago</div>
                </div>
                <div class="meta">
                  <a class="like">
                    <i aria-hidden="true" class="like icon"></i>
                    8 Likes
                  </a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="label"><img src="/images/avatar/small/joe.jpg" /></div>
              <div class="content">
                <div class="summary">
                  <a>Joe Henderson</a>
                  posted on his page
                  <div class="date">3 days ago</div>
                </div>
                <div class="text extra">
                  Ours is a life of constant reruns. We&#x27;re always circling back to where we&#x27;d we
                  started, then starting all over again. Even if we don&#x27;t run extra laps that day, we
                  surely will come back for more of the same another day soon.
                </div>
                <div class="meta">
                  <a class="like">
                    <i aria-hidden="true" class="like icon"></i>
                    5 Likes
                  </a>
                </div>
              </div>
            </div>
            <div class="event">
              <div class="label"><img src="/images/avatar/small/justen.jpg" /></div>
              <div class="content">
                <div class="summary">
                  <a>Justen Kitsune</a>
                  added
                  <a>2 new photos</a>
                  of you
                  <div class="date">4 days ago</div>
                </div>
                <div class="images extra">
                  <a><img src="/images/wireframe/image.png" /></a>
                  <a><img src="/images/wireframe/image.png" /></a>
                </div>
                <div class="meta">
                  <a class="like">
                    <i aria-hidden="true" class="like icon"></i>
                    41 Likes
                  </a>
                </div>
              </div>
            </div>
          </div>
	        )
	    }
	}
	

	export default CreatePost;
