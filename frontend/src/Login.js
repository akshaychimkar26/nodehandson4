import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const submit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      alert("Please provide email and password.");
    }

    try {
      const response = await axios.post('https://register-login-api-lihs.onrender.com/user/login',formData);
      console.log(response.data);

      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <h2 className='registerhead'>LOGIN</h2>
      <form>
        <fieldset className='field'>
            <legend>login</legend>
            <input type='email' placeholder='enter your email' id='email' name='email' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/> <br/><br/>
            <input type='password' placeholder='enter your password' id='password' name='password' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/> <br/><br/>
            <button onClick={submit}>Submit</button>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
