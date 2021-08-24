import React from 'react';
import { useState, useEffect } from 'react';
import { googleProvider, githubProvider } from '../../config/authMethods.js';
import { Suspense, lazy } from 'react';
import socialMediaAuth from '../../service/auth.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import firebase from 'firebase';
import firebaseConfig from '../../config/firebase-config.js';

export const AuthContext = React.createContext(null);

firebase.initializeApp(firebaseConfig);
//const PlaceHolder = React.lazy(() => import('./components/placeholder.jsx'));

const App = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(true);

  // useEffect(() => {
  //   //RENDER BBY, RENDER! api calls and stuff go here
  //   console.log('HELLOO ANYONE THERE??')
  // }, []);


  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className="container">
        <div className="text-center">
          <h1>greetings fellow human</h1>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {loggedIn ? <HomePage/> : (signedUp ? <Login/> : <SignUp/>)}
          <Button>Don't have an account?</Button>
          {/* </Suspense> */}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default App;