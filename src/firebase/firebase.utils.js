import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDXPzVZYQnxZvJyit7edduEWUTZB4OwLUk",
  authDomain: "kings-clothig.firebaseapp.com",
  databaseURL: "https://kings-clothig.firebaseio.com",
  projectId: "kings-clothig",
  storageBucket: "kings-clothig.appspot.com",
  messagingSenderId: "290575026292",
  appId: "1:290575026292:web:d01453793785600e1ce921",
  measurementId: "G-78X85Y7LRW"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase