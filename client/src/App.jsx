import React from 'react';
import { useState, useEffect } from 'react';
import { googleProvider, githubProvider } from '../../config/authMethods.js';
import { Suspense, lazy } from 'react';
import socialMediaAuth from '../../service/auth.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Breadcrumb } from 'react-bootstrap';

import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';


//const PlaceHolder = React.lazy(() => import('./components/placeholder.jsx'));

const App = (props) => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [signedUp, setSignedUp] = useState(false);

  // useEffect(() => {
  //   //RENDER BBY, RENDER! api calls and stuff go here
  //   console.log('HELLOO ANYONE THERE??')
  // }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h1>greetings fellow human</h1>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {loggedIn ? <HomePage/> : (signedUp ? <Login/> : <SignUp/>)}
        <Button>CLICK ME I DARE YOU</Button>
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default App;