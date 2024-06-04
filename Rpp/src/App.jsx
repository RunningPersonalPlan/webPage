import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {  Route,Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import NotFound from './views/404.jsx'


function App() {
 

  return (
    <>
  
      <Navbar/>
     
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/404" element={<NotFound/>} />
        
      </Routes>
     
    </>
  )
}

export default App
