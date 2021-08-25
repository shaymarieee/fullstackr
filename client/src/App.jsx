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
import BoardView from './components/BoardView.jsx';

export const AuthContext = React.createContext(null);

firebase.initializeApp(firebaseConfig);
//const PlaceHolder = React.lazy(() => import('./components/placeholder.jsx'));

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [signedUp, setSignedUp] = useState(true);
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  const [tickets, setTickets] = useState([]);
  const [onHomepage, setOnHomepage] = useState(false);
  const [onBoardView, setOnBoardView] = useState(false);
  const [noBoards, setNoBoards] = useState(true);

  useEffect(() => {
    axiosCalls.getBoards(user)
      .then((res) => {
        console.log('AYYEE GOT ME SUM BOARDS', res, user);
        if (res.data[0]) {
          setNoBoards(false);
          setBoards(res.data);
          setOnHomepage(true);
          // IF WE CLICK ON A BOARD WE'RE NOT ON THE HOMEPAGE ANYMORE
        } else {
          setCurrentBoard({});
          setOnHomepage(true);
          //RENDER CREATE BOARD STUFF
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    if (currentBoard.id) {
      setOnHomepage(false);
      axiosCalls.getTickets(currentBoard.id)
      .then((res) => {
        setTickets(res.data);
        console.log('tickets', res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [currentBoard]);


  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      <SideBar currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}/>
      <div className="container">
        <div className="text-center">
          {/* <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> */}
            <h1>FULLSTACKR</h1>
            <p>greetings fellow human</p>
          {/* </div> */}
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {loggedIn ? (onHomepage ? <HomePage setCurrentBoard={setCurrentBoard} boards={boards}/> : <BoardView currentBoard={currentBoard} tickets={tickets}/>) : (signedUp ? <Login user={user} setUser={setUser}/> : <SignUp user={user} setUser={setUser}/>)}
          <button type="button" className="btn btn-light" onClick={(e) => {setSignedUp(!signedUp)}}>{signedUp ? `Don't have an account?` : `Already have an account?`}</button>
          {/* </Suspense> */}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default App;