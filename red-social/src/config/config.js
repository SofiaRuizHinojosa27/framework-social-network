// Initialize Firebase
import * as firebase from "firebase"

  const config = {

    apiKey: "AIzaSyCwE_ydWr8RCQYpxfs2BrKqnafyAsAv-uY",
    authDomain: "react-redsocial.firebaseapp.com",
    databaseURL: "https://react-redsocial.firebaseio.com",
    projectId: "react-redsocial",
    storageBucket: "gs://react-redsocial.appspot.com",
    messagingSenderId: "1090411603648",
    appId: "1:1090411603648:web:02c123f1227f7c4e"
    }

    firebase.initializeApp(config);

export default firebase;
