import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyGX0BEHQaS4p3H7TbhUHEa56Ydl0QpoI",
  authDomain: "e-shop-89615.firebaseapp.com",
  databaseURL: "https://e-shop-89615.firebaseio.com",
  projectId: "e-shop-89615",
  storageBucket: "",
  messagingSenderId: "414613224835",
  appId: "1:414613224835:web:60311de929659a0370cab6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
