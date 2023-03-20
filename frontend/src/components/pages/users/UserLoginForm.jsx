import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const res = await axios.post('/users/login', userData)
      console.log(res.data)
    } catch(err) {
      alert('error')
    }
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

export default UserLoginForm;
