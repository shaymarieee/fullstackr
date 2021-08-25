import React, { useState, useEffect, Suspense, lazy } from 'react';
//import { googleProvider, githubProvider } from '../../config/authMethods.js';
//import socialMediaAuth from '../../service/auth.js';
import firebase from 'firebase';
import { firebaseConfig } from '../../config.js';

import axiosCalls from './helpers/axiosCalls.js';
import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import SignUp from './components/SignUp.jsx';
import SideBar from './components/SideBar.jsx';

export const AuthContext = React.createContext(null);

firebase.initializeApp(firebaseConfig);
//const PlaceHolder = React.lazy(() => import('./components/placeholder.jsx'));

const App = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [signedUp, setSignedUp] = useState(true);
  const [currentBoard, setCurrentBoard] = useState({});
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // RENDER BBY, RENDER! api calls and stuff go here
    axiosCalls.getBoards(user)
      .then((res) => {
        //COMING BACK UNDEFINED BCUZ NOTHINGS THERE AYEEE
        console.log('AYYEE GOT ME SUM BOARDS', res, user);
        setCurrentBoard(res[0] || {});
        // axiosCalls.getTickets(res[currentBoard].id)
        if (!res && loggedIn) {
          // TELL THEM TO MAKE A NEW BOARD WOO
        } else {
          //display a list of their boards
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    if (currentBoard.id) {
      axiosCalls.getTickets(currentBoard.id)
      .then((res) => {
        console.log('OMFG', res);
        setTickets(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [currentBoard]);


  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      <SideBar/>
      <div className="container">
        <div className="text-center">
          <h1>greetings fellow human</h1>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {loggedIn ? <HomePage/> : (signedUp ? <Login user={user} setUser={setUser}/> : <SignUp user={user} setUser={setUser}/>)}
          <button type="button" className="btn btn-light" onClick={(e) => {setSignedUp(!signedUp)}}>{signedUp ? `Don't have an account?` : `Already have an account?`}</button>
          {/* </Suspense> */}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default App;