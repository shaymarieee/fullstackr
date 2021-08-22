import React from 'react';
import { googleProvider, githubProvider } from './../config/authMethods.js';
import socialMediaAuth from './../service/auth.js'

const App = () => {

  const authClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    conso
  }

  //HOOKS????
  return (
    <div className="App">
      <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button>
    </div>
  )
}

export default App;