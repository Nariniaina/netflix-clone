import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAS0lAyED21gZErI9F34XcPkxs4CIqSEJA",
    authDomain: "netflix-clone-93af4.firebaseapp.com",
    projectId: "netflix-clone-93af4",
    storageBucket: "netflix-clone-93af4.appspot.com",
    messagingSenderId: "377878497518",
    appId: "1:377878497518:web:57b109451a93cb6e364bff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

// export can be two or plus ..
export { auth };
// export must be one
export default { db };