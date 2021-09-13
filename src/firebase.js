import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyD9ip-dR6vk_yOQz8NJgJSNZibr5b1n1iA",
  authDomain: "superchat-525e7.firebaseapp.com",
  projectId: "superchat-525e7",
  storageBucket: "superchat-525e7.appspot.com",
  messagingSenderId: "114379577890",
  appId: "1:114379577890:web:b5cc86ca9bac19329d887b",
  measurementId: "G-157GC4D60F"
})

const db = firebaseapp.firestore()
const auth = firebase.auth()
export {db, auth};