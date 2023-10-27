import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
const navi = useNavigate()
const [data, setData] = useState()
const [store, setStore] = useState()
const handleLogout=()=>{
  const API = "https://register-login-api-t9to.onrender.com/user/logout"
  axios.post(API,data)
  .then(res=>{
    setStore(res.data);
    navi('/')
  })
  .catch(err=>console.log(err))
}
   
  return (
    <div className='home'> 

<div className='logoutBut'><button onClick={handleLogout} className='homeLogOut'>Logout</button></div>
       <div className='homeText'> <h1 >Home </h1></div>
    <div className="homeBody"><img className="homeImg" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-02-ksh6qkug.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=671bde82629fba3ee647c5ce1fde5504" alt="no img"/></div>

    </div>
  )
}

export default Home