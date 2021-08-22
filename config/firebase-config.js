import firebase from 'firebase';
//import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVQ97Sc8bU1X2GxgPpegITBL6yyjuyPBU",
  authDomain: "fullstackr-24906.firebaseapp.com",
  projectId: "fullstackr-24906",
  storageBucket: "fullstackr-24906.appspot.com",
  messagingSenderId: "1077267407248",
  appId: "1:1077267407248:web:4eeb45d58fece9d117d315",
  measurementId: "G-R34SX89S3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;