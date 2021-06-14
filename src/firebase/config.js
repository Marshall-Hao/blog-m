import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBF45L-ZmBaAnXEi86Qdl4yZ-IcIN3-udo",
    authDomain: "vue-firbase-m-blog.firebaseapp.com",
    projectId: "vue-firbase-m-blog",
    storageBucket: "vue-firbase-m-blog.appspot.com",
    messagingSenderId: "359555569829",
    appId: "1:359555569829:web:913439bdf5cd66086d154c",
    measurementId: "G-Z3TWTVM6WM"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }