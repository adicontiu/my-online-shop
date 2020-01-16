import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAWq44bFhFFSLjtHFkmFYR0FAoFrUkjHwg",
  authDomain: "my-online-shop-db.firebaseapp.com",
  databaseURL: "https://my-online-shop-db.firebaseio.com",
  projectId: "my-online-shop-db",
  storageBucket: "my-online-shop-db.appspot.com",
  messagingSenderId: "836933850588",
  appId: "1:836933850588:web:55d10a3f534ddf5adf2b19",
  measurementId: "G-TEJP335FHM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

// setup google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;