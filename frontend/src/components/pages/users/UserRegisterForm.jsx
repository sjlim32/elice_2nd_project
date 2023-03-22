import React, {useState} from "react"
// import axios from 'axios'
import * as API from '../../../utils/api';

function UserRegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(email) === false) {
      setError('invalide Email Address');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('password is not confirmed');
      return false;
    }
    return true;
  };

  const validateForm = () => {
    return (
      validateEmail() &&
      validatePassword()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      role: 'user',
      email,
      password
    }
      try {
        const res = await API.post('/users', {userData})
        console.log(res.data)
        alert("성공")
      } catch(err) {
        alert("실패")
      }
  }

  return (
    <form>
      <input
        id='email'
        value={email}
        placeholder='abc@abc.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button id='checkEmail' >중복 확인</button>

      <input
        id='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input 
        id='confirmPassword'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button id='submit' onClick={handleSubmit}>가입하기</button>
    </form>
  )
}

export default UserRegisterForm