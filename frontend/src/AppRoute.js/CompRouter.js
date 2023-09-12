import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Components/Home'
import NewRegister from '../Components/NewRegister'
import Login from '../Components/Login'

function CompRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<NewRegister/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/user/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default CompRouter