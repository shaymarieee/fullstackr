import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../App.jsx';
import firebase from 'firebase';

const SignUp = (props) => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then(res => {
        //console.log('HELLOOOO??!?!', res.user)
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch(e => {
        setErrors(e.message);
        console.log(error);
      });
  };

  return (
    <div className="signup">
      <form onSubmit={(e) => {handleSignUp(e)}}>
        <label>Email:</label>
        <input onChange={(e) => {setNewEmail(e.target.value)}}></input>
        <label>Password:</label>
        <input onChange={(e) => {setNewPassword(e.target.value)}}></input>
        <button>Sign Up</button>
      </form>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default SignUp;