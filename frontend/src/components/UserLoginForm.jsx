import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    axios
        .post('/users/login', userData)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
  };

  return (
    <div>
      <input
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        id='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button id='submit' onSubmit={handleSubmit}>로그인</button>
    </div>
  )
}

export default LoginForm;
