import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/app";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyDK8eLsYRk6wPiDpH2s9AHn2XDuovW1qCo",
  authDomain: "what-todo-tomarrow.firebaseapp.com",
  projectId: "what-todo-tomarrow",
  storageBucket: "what-todo-tomarrow.appspot.com",
  messagingSenderId: "865110735815",
  appId: "1:865110735815:web:7613617958621e9e5677e2",
  measurementId: "G-2RQLD72MVX",
};

firebase.initializeApp(config);
const db=firebase.firestore();

export default db;
