import React from 'react';
import { useState, useEffect } from 'react';
import { googleProvider, githubProvider } from '../../config/authMethods.js';
import { Suspense, lazy } from 'react';
import socialMediaAuth from '../../service/auth.js';
import { Button } from 'react-bootstrap';
import firebase from 'firebase';
import firebaseConfig from '../../config/firebase-config.js';

import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import SideBar from './components/SideBar.jsx';

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
      <SideBar/>
      <div className="container">
        <div className="text-center">
          <h1>greetings fellow human</h1>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {loggedIn ? <HomePage/> : (signedUp ? <Login/> : <SignUp/>)}
          <button type="button" className="btn btn-light" onClick={(e) => {setSignedUp(!signedUp)}}>{signedUp ? `Don't have an account?` : `Already have an account?`}</button>
          {/* </Suspense> */}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default App;