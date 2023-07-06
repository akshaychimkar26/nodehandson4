import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import './style.css'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
