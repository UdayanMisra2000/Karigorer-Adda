//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCPWeLgvG8BC8X8ez8aiVLeChW8DNHNKoc",
    authDomain: "karigoreradda-387b3.firebaseapp.com",
    projectId: "karigoreradda-387b3",
    storageBucket: "karigoreradda-387b3.appspot.com",
    messagingSenderId: "358920448334",
    appId: "1:358920448334:web:d98afed8c67edb2729561f",
    measurementId: "G-6RHXY0DEHS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebaseApp.firestore();
const auth = firebase.auth();
//export default firebase;
export { db, auth };
