import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/RPPBLACK.jpg"
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
      <Link to="#" className="navItem" style={{ '--i': 0 }}>Entrenamiento</Link>
      <Link to="#" className="navItem" style={{ '--i': 1 }}>Nosotros</Link>
      <Link to="#" className="navItem" style={{ '--i': 1 }}>Blog</Link>
      <Link to="#" className="navItem" style={{ '--i': 2 }}>Contacto</Link>
    </nav>
  </header>

   
  )
}

export default Navbar;