import React from 'react';
import "./Footer.css"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className='container-contacto-redes'>
        <div className='container-contacto'>
          <h1 className='titulofooter'>CONTACTO</h1>
          <h2 className='info-footer'>Celular: 300 257 5129 </h2>
          <h2 className='info-footer'>Correo: info@rpp.com.co</h2>
        </div>
        <div className='container-redes'>
        <h1 className='titulofooter-redes'>REDES SOCIALES</h1>  
      
        <div className='img-redes-container'>
            <a href="#"><img src={instagram} alt="instagram" className='img-footer' /></a>
            <a href="#"><img src={facebook} alt="facebook" className='img-footer' /></a>
        </div>

        </div>
      </div>
      <div className='copy-right'>
        <h1 className='info-footer-copy'>© 2024 RPP. Todos los derechos reservados</h1>
      </div>
    
    </footer>
  );
};

export default Footer;
