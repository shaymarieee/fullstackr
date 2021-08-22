import React from 'react';
import { useState, useEffect } from 'react';
import { googleProvider, githubProvider } from '../../config/authMethods.js';
import { Suspense, lazy } from 'react';
import socialMediaAuth from '../../service/auth.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Breadcrumb } from 'react-bootstrap';

//const PlaceHolder = React.lazy(() => import('./components/placeholder.jsx'));

const App = (props) => {

  const [example, setExample] = useState('');

  // useEffect(() => {
  //   //RENDER BBY, RENDER! api calls and stuff go here
  //   console.log('HELLOO ANYONE THERE??')
  // }, [])

  // const authClick = async (provider) => {
  //   console.log('hey');
  //   const res = await socialMediaAuth(provider);
  // };

  //HOOKS????
  return (
    <div className="root">
      <h1>greetings fellow human</h1>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Breadcrumb>
        <Breadcrumb.Item>username</Breadcrumb.Item>
        <Breadcrumb.Item>anuthaone</Breadcrumb.Item>
        <Breadcrumb.Item>anuthaone</Breadcrumb.Item>
      </Breadcrumb>
      <Button>CLICK ME I DARE YOU</Button>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
      {/* </Suspense> */}
    </div>
  )
}

export default App;