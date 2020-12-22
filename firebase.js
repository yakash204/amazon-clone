import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCucp8TIJAs01kt8FKoKMtaykyLAQf7HE",
  authDomain: "clone-ca59b.firebaseapp.com",
  databaseURL: "https://clone-ca59b.firebaseio.com",
  projectId: "clone-ca59b",
  storageBucket: "clone-ca59b.appspot.com",
  messagingSenderId: "177579637277",
  appId: "1:177579637277:web:50ff79cf0640722de464f4",
  measurementId: "G-RFDX3L6DF8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
