
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function NewRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "https://register-login-api-6bft.onrender.com/user/register"
    
    setData({
      name: "",
      phonenumber: "",
      email: "",
      password: ""
    });
    if (email && password) {
      axios.post(API,data)
        .then(res => {
          setStore(res.data);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SignupCon">
      <div className="SignText">Sign up here</div>
      <div className="cardForm">
        <form className="SignupForm">
          <input
            className="sInp"
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/user/login"> Already have an account? Sign in</NavLink>
          </div>
        </form>
      </div>

      <div className="homeBody">
        <img
          className="homeImg"
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-02-ksh6qkug.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=671bde82629fba3ee647c5ce1fde5504"
          alt="no img"
        />
      </div>
    </div>
  );
}

export default NewRegister;