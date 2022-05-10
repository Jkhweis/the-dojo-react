import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDncmmFTOPVwAg5oeTR92ZEEWmeZeyDT2o',
  authDomain: 'the-dojo-react-15a17.firebaseapp.com',
  projectId: 'the-dojo-react-15a17',
  storageBucket: 'the-dojo-react-15a17.appspot.com',
  messagingSenderId: '742727837845',
  appId: '1:742727837845:web:cb4ece8f958ca29130939c',
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
