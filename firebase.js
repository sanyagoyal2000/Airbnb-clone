import  firebase from "firebase"
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfA4_3olzQ7cS_cpW-6ZjH0y-xFUNqoaU",
  authDomain: "sanyabnb.firebaseapp.com",
  projectId: "sanyabnb",
  storageBucket: "sanyabnb.appspot.com",
  messagingSenderId: "988475582949",
  appId: "1:988475582949:web:4ba9de83e827f75b62e70c",
  measurementId: "G-1PMCTJEPP1"
};

  const app = !(firebase.apps.length)
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  