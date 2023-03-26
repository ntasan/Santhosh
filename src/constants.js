import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCyAZBeGuoQERXeMOjHRCli-JPsYwo4f1Q",
  authDomain: "machinetest-620d1.firebaseapp.com",
  databaseURL: "https://machinetest-620d1-default-rtdb.firebaseio.com",
  projectId: "machinetest-620d1",
  storageBucket: "machinetest-620d1.appspot.com",
  messagingSenderId: "658877414922",
  appId: "1:658877414922:web:1122e5440e475e1b9e29f3",
  measurementId: "G-3XHXTKMKF7"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;