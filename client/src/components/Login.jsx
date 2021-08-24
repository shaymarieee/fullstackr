import React from 'react';
import firebase from 'firebase';
import { useState, useContext } from 'react';
import { AuthContext } from '../App.jsx';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('hi there')
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('meow', res.user)
      if (res.user) Auth.setLoggedIn(true);
    })
    .catch(e => {
      setErrors(e.message);
    });
  };


  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input onChange={(e) => {setEmail(e.target.value)}}></input>
        <label>Password:</label>
        <input onChange={(e) => {setPassword(e.target.value)}}></input>
        <button type="button" className="btn btn-light btn-sm" onClick={(e) => {handleLogin(e)}}>Login</button>
      </form>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default Login;