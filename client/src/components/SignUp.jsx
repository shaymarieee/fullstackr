import React from 'react';
import { useState, useEffect } from 'react';

const SignUp = (props) => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassord] = useState('');

  // const authClick = async (provider) => {
  //   console.log('hey');
  //   const res = await socialMediaAuth(provider);
  // };

  const handleSignUp = (event, data) => {
    event.preventDefault();
    console.log('hi lul', data)
  }

  return (
    <div className="signup">
      <form>
        <label>Email:</label>
        <input onChange={(e) => {setNewEmail(e.target.value)}}></input>
        <label>Password:</label>
        <input onChange={(e) => {setNewPassword(e.target.value)}}></input>
        <button onSubmit={(e) => {handleSignUp(e, {newEmail: newEmail, newPassword: newPassword})}}>Sign Up</button>
      </form>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default SignUp;