import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://register-login-api-2vrh.onrender.com/user/register', formData);
      console.log(response.data);

      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <h2 className='registerhead'>REGISTER</h2>
      <form action='' method='post' onSubmit={submit}>
        <fieldset className='field'>
            <legend>register</legend>
            <input type='text' placeholder='enter your name' name='name' onChange={handleChange} value={formData.name}/> <br/><br/>
            <input type='email' placeholder='enter your email' name='email'  onChange={handleChange} value={formData.email}/><br/><br/>
            <input type='password' placeholder='enter your password' name='password' onChange={handleChange} value={formData.password}/><br/><br/>
            <input type='number' placeholder='enter your contact' name='contactnumber'/><br/><br/>
            <button type='submit'>Submit</button>
            <Link to="/"> Already have an account?</Link>
        </fieldset>
      </form>
</div>
);
}

export default Register
