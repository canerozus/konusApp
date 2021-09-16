import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyB4Ta8sbeFIN-vExhyLMcbZ2WuqkdcJJOE",
    authDomain: "konusapp-cc9db.firebaseapp.com",
    projectId: "konusapp-cc9db",
    storageBucket: "konusapp-cc9db.appspot.com",
    messagingSenderId: "1061666105827",
    appId: "1:1061666105827:web:38ff8d95a94dc4ccc7d8d6"
  }).auth();
