import React, {Component} from 'react';
import '../App.css';
import firebase from "../config/config";
import FileUpload from './FileUpload';


class LogInGoogle extends Component{
    constructor(){
        super();
        this.state= {
            user:null,
            pictures: [],
            uploadValue: 0
        }; 
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.renderLoginButton=this.renderLoginButton.bind(this);

    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
        firebase.database().ref('/pictures').on("child_added", snapshot => {
            this.setState({
                pictures: this.state.pictures.concat(snapshot.val())
            })
        })
    }

    handleAuth(){
        const provider= new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout(){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user.email} ha cerrado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    renderLoginButton(){
        if(this.state.user){
            return(
                <div>
                    <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
                    <p>Hola {this.state.user.displayName}!</p>
                    <button className="btn"  onClick={this.handleLogout}>Log Out</button>

                    <FileUpload onUpload={this.handleUpload} uploadValue={this.state.uploadValue}/>

                    {
                        this.state.pictures.map(picture=>(
                            <div>
                                <img alt="" src={picture.image}/>
                                <br/>
                                <img src={picture.photoURL} alt={picture.displayName}/>
                                <br/>
                                <span>{picture.displayName}</span>
                            </div>
                        ))
                    }
                </div> 
            );
        } else {
            return(
            <button class="btn btn-success" onClick={this.handleAuth}>Login with <i class="fab fa-google"></i>oogle</button>
            );
        }
    }

    handleUpload(event){
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/redSocial/${file.name}`);
        const task = storageRef.put(file);
    
        task.on('state_changed', snapshot =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadvalue: percentage
            })
        }, error => {console.log(error.message)
        }, ()=>{ 
            const record ={
                photoURL:this.state.user.photoURL,
                displayName: this.state.user.displayName,
                image: task.snapshot.downloadURL
            };
            const dbRef= firebase.database().ref('/pictures');
            const newPicture= dbRef.push();
            newPicture.set(record);
    });
    } 

    render(){
        return(
            <div className="btnRegister">
                <p>{this.renderLoginButton()}</p>

            </div>
        )
    }
}

export default LogInGoogle;