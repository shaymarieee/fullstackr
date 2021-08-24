import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../App.jsx';
import firebase from 'firebase';

const SignUp = (props) => {
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then(res => {
        if (res.user) {
          Auth.setLoggedIn(true);
          return res.user.updateProfile({
            displayName: newUsername
          })
        }
      })
      .catch(e => {
        setErrors(e.message);
        console.log(error);
      });
  };

  return (
    <div className="signup">
      <h1>Sign Up!</h1>
      <form onSubmit={(e) => {handleSignUp(e)}}>
        {/* <label>Email:</label> */}
        <input type="text" className="form-control" placeholder="email" onChange={(e) => {setNewEmail(e.target.value)}}></input>
        <input id="username" type="text" className="form-control" placeholder="username" onChange={(e) => {setNewUsername(e.target.value)}}></input>
        <input type="text" className="form-control" placeholder="password" onChange={(e) => {setNewPassword(e.target.value)}}></input>
        <button button type="button" className="btn btn-light btn-sm">Sign Up</button>
      </form>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default SignUp;