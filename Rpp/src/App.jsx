
import Navbar from './components/Navbar.jsx'
import {  Route,Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import NotFound from './views/404.jsx'
import "./App.css"


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
