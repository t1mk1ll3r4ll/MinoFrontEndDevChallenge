import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDPpujX0bqZWBGoyXEpRqTFNc0-Vv7-LPA",
    authDomain: "crud-udemy-react-48dbf.firebaseapp.com",
    projectId: "crud-udemy-react-48dbf",
    storageBucket: "crud-udemy-react-48dbf.appspot.com",
    messagingSenderId: "798139980439",
    appId: "1:798139980439:web:40f42981c5282c6b3327d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()

  export  {auth,db}