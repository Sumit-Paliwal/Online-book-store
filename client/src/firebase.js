import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC73YdkW6ZRwRoAHERrQwOTw_LlRcvfEvg",
  authDomain: "onlinebookdemp.firebaseapp.com",
  projectId: "onlinebookdemp",
  storageBucket: "onlinebookdemp.appspot.com",
  messagingSenderId: "338553860914",
  appId: "1:338553860914:web:4e2f838b915851f3959d2b",
  measurementId: "G-37YTD4TJ98"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {storage}