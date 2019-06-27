import React,{Component} from "react";
import '../App.css';
import firebase from "../config/config";
	

export class ShowPost extends Component{
	constructor(){
        super();


        this.state={
            posts: []
        }
    }


    componentWillMount(){
        function FeedPosts(snapshot){
            let posts = []


            snapshot.forEach(post => {
                const items = post.val();
                posts.unshift(items)
            });
            return posts
        }
        const dbPostsRef = firebase.database().ref();
        const postsRef = dbPostsRef.child("posts/");
        postsRef.on("value", snapshot=>{
            const postForArray = FeedPosts(snapshot);
            this.setState({
                posts: postForArray
            })
        })
    }


    render(){
        return(
				
			<div class="column">
                <div class="ui segment">
                <div class="ui comments">
                <h3 class="ui dividing header">Publicaciones</h3>
				
			<div class="ui feed">
			{this.state.posts.map((post, i) =>
			<div class="event">
			
			  <div class="label"><img src={post.foto}/></div>
			  <div class="content">
				<div class="summary">
				  <a class="user">{post.autor}</a>
				  <p>{post.contenido}</p>
				</div>
				<div class="meta">
				<div class="ui labeled button" tabindex="0">
  					<div class="ui button">
    				<i class="heart icon"></i> Like
  					</div>
  					<a class="ui basic label">
    				37
  					</a>
				</div>
				</div>
			  </div>
			 
			</div>
			 )}
			 <br/>
			</div>
			</div>
			</div>
			</div>		
                
        )
    }


    
}


export default ShowPost;
