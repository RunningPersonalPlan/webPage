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
      <Link to="/" className="navItem" style={{ '--i': 0 }}>Home</Link>
      <Link to="/entreno" className="navItem" style={{ '--i': 1 }}>Entreno</Link>
      <Link to="#" className="navItem" style={{ '--i': 2 }}>Blog</Link>
      <Link to="/contacto" className="navItem" style={{ '--i': 3 }}>Contacto</Link>
    </nav>
  </header>

   
  )
}

export default Navbar;