import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/RPPlogo.svg";
import whatsapp from "../assets/WhatsappLogo.svg"
import "./Navbar.css"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
      };
  return (
   <header className="header">
    <a href="/" className="logo">
      <img src={logo} className='logo'/>
    </a>

    <input type="checkbox" id="check" />
    <label htmlFor="check" className="icons" onClick={toggleMenu}>
      <div className={`menu-btn ${open ? 'open' : ''}`}>
        <div className="hamburger"></div>
      </div>
    </label>
    <nav className="navbar">
      <Link to="/" className="navItem" style={{ '--i': 0 }}>SERVICIOS</Link>
      <Link to="/entreno" className="navItem" style={{ '--i': 1 }}>NUESTRO EQUIPO</Link>
      <Link to="/blog" className="navItem" style={{ '--i': 2 }}>TESTIMONIOS</Link>
      <a href="https://wa.me/573107686892" className="navItem" id="whatsapp" style={{ '--i': 3 }}>
      <span className="whatsappspan">
        <img src={whatsapp} alt="whatsappicon"  /> 
      </span>
      CONTACTO
      </a>
    </nav>
  </header>

   
  )
}

export default Navbar;