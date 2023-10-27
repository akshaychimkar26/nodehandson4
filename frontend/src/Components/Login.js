
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "https://register-login-api-6bft.onrender.com/user/login";
    if (email && password) {
      axios.post(API, data)
        .then((res) => {
          console.log(res.data);
          if(res.data!=="wrong password"){
          navigate("/home");
          }else{
            setError("wrong password.");
          }
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter correct email and password.");
    }
  };

  const handleBackBtn = ()=>{
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleBackBtn} className="backButtn">Back</button>
      <div className="loginText">Login here</div>
      <div className="loginForm">
        <div className="logComCon">
          <div className="Logcont1">
            <input
              className="lLoginInp"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="Logcont2">
            <input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <span className="errMsg">{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
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

export default Login;