import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDo2g390SqWO7uyJlO7jDTSJzo_cF3SFCA",
    authDomain: "comentarios-a5cdf.firebaseapp.com",
    databaseURL: "https://comentarios-a5cdf.firebaseio.com",
    projectId: "comentarios-a5cdf",
    storageBucket: "comentarios-a5cdf.appspot.com",
    messagingSenderId: "202108395345"
  };
  firebase.initializeApp(config);

  export const database= firebase.database();
  export const auth = firebase.auth();