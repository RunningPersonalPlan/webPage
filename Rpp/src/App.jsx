
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
import './index.css';


function App() {
 

  return (
    <div className='app'>
  
      <Navbar/>
      <main className="app-content">
        <Routes>
        
          <Route  path="/" element={<Home/>}/>
          <Route path="/404" element={<NotFound/>} />
          <Route path="/contacto" element={<ContactUs/>} />
          <Route path="/nuestro-equipo" element={<Entrenamiento/>} />
          <Route path="/comunidad" element={<Blog/>} />
          <Route path="/FromSubmitted" element={<FormSubmitted/>} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </main>

      <Footer/>
     
    </div>
  )
}

export default App
