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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;