import React from 'react'
import "./App.css"
import Products from './pages/Product/Products'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'   
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
