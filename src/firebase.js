import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC_jccfvJ89BJzroycll74JVo3f0rOk0Vg",
  authDomain: "lunch-rush-demo.firebaseapp.com",
  databaseURL: "https://lunch-rush-demo.firebaseio.com",
  projectId: "lunch-rush-demo",
  storageBucket: "",
  messagingSenderId: "136075278096"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
