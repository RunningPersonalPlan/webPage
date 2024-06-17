
import Navbar from './components/Navbar.jsx'
import {  Route,Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import NotFound from './views/404.jsx'
import "./App.css"
import ContactUs from './views/Contacto.jsx'
import Entrenamiento from './views/Entrenamiento.jsx'
import Blog from './views/Blog.jsx'
import Footer from './components/Footer.jsx'
import FormSubmitted from './views/FormSubmitted.jsx'


function App() {
 

  return (
    <>
  
      <Navbar/>
     
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/404" element={<NotFound/>} />
        <Route path="/contacto" element={<ContactUs/>} />
        <Route path="/entreno" element={<Entrenamiento/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/FromSubmitted" element={<FormSubmitted/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer/>
     
    </>
  )
}

export default App
