import React from 'react';

const Login = (props) => {
  const [email, setEmail] = usetState('');
  const [password, setPassword] = useState('');

  // const authClick = async (provider) => {
  //   console.log('hey');
  //   const res = await socialMediaAuth(provider);
  // };
  const handleLogin = (data) => {
    console.log('dataahhhrrhhdsvsdv', data)
  }

  return (
    <div className="login">
      <form>
        <label>Email:</label>
        <input onChange={(e) => {setEmail(e.target.value)}}></input>
        <label>Password:</label>
        <input onChange={(e) => {setPassword(e.target.value)}}></input>
        <button onSubmit={(e) => {handleLogin({email: email, password: password})}}>Login</button>
      </form>
      {/* <button onClick={() => {authClick(googleProvider)}}>Login with Google</button>
      <button onClick={() => {authClick(githubProvider)}}>Login with Github</button> */}
    </div>
  );
}

export default Login;