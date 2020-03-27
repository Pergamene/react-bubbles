import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BubbleState from '../services/BubbleState';

const emptyCredentials = {
  username: '',
  password: '',
};

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState(emptyCredentials);

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    const isLoggedIn = await BubbleState.bubbleLogin(credentials);
    if (isLoggedIn) {
      history.push('/bubbles');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={credentials.login} onChange={handleChange}/>
      <input name="password" type="password" value={credentials.password} onChange={handleChange}/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
