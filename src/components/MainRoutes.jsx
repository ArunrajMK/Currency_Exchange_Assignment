import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Currency from './Currency'
import { Footer } from './Footer'
import Login from './Login'
import NavBar from './NavBar'
import SignUp from './SignUp'

function MainRoutes() {
  return (
    <>
    <NavBar/>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/currency" element={<Currency/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default MainRoutes