import  firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB1MT_aeuDbC4fd9ylLmFbLaJ7CBhqBIUI",
    authDomain: "airbnb-clone-5196e.firebaseapp.com",
    projectId: "airbnb-clone-5196e",
    storageBucket: "airbnb-clone-5196e.appspot.com",
    messagingSenderId: "138888604450",
    appId: "1:138888604450:web:cc4f8b196add353d34537b",
    measurementId: "G-9JCZMVSW4K"
  };

  const app = !(firebase.apps.length)
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();