import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

let db

export default ({ Vue }) => {
  Vue.use(firestorePlugin)
  var firebaseConfig = {
    apiKey: "AIzaSyDtfs0_Jkd2zem6T3tVhfFsBuBV8jbAFtc",
    authDomain: "s4-amica.firebaseapp.com",
    databaseURL: "https://s4-amica.firebaseio.com",
    projectId: "s4-amica",
    storageBucket: "s4-amica.appspot.com",
    messagingSenderId: "140741598761",
    appId: "1:140741598761:web:1f069bf307307d13540638"
  }
  firebase.initializeApp(firebaseConfig)
  db = firebase.firestore()
}

export { db }
