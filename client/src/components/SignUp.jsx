import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../App.jsx';
import firebase from 'firebase';
import axiosCalls from '../helpers/axiosCalls.js';

const SignUp = (props) => {
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);

  const handleSignUp = (e, provider) => {
    e.preventDefault();
    if (provider) {
      firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        return res.user;
      })
      .catch((err) => {
        return err;
      })
    } else {
      firebase
      .auth()
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then(res => {
        if (res.user) {
          let user = {username: newUsername, email: newEmail};
          axiosCalls.newUser(user);
          Auth.setLoggedIn(true);
          props.setUser(user);

          return res.user.updateProfile({
            displayName: newUsername
          })
        }
      })
      .catch(e => {
        setErrors(e.message);
        console.log(error);
      });
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up!</h1>
      <div className="d-flex justify-content-center">
      <form>
        <label>Email:</label>
        <input type="text" onChange={(e) => {setNewEmail(e.target.value)}}></input>
        <label>Username:</label>
        <input id="username" type="text" onChange={(e) => {setNewUsername(e.target.value)}}></input>
        <label>Password:</label>
        <input type="password" onChange={(e) => {setNewPassword(e.target.value)}}></input>
        <button type="button" className="btn btn-light btn-sm" onClick={(e) => {handleSignUp(e)}}>Sign Up</button>
        {/* <button type="button" className="btn btn-light btn-sm">Sign Up with Google</button> */}
      </form>
      </div>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default SignUp;