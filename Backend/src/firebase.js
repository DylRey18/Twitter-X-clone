import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDdkItNRzPio5Q_m685CJJ9N6Arrxn1pUE",
  
    authDomain: "twitter-clone-15f25.firebaseapp.com",
  
    projectId: "twitter-clone-15f25",
  
    storageBucket: "twitter-clone-15f25.firebasestorage.app",
  
    messagingSenderId: "105003379089",
  
    appId: "1:105003379089:web:e13875951aeda87cb81230",
  
    measurementId: "G-6W3829R0SG"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db