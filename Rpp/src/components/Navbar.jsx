import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/RPPlogo.svg";
import whatsapp from "../assets/WhatsappLogo.svg"
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const pathname = location.pathname;
    setCurrentPage(pathname);
  }, [location]);
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
      };
  return (
   <header className="header">
    <a href="/" className="logo">
      <img src={logo} className='logo' alt='logo'/>
    </a>

    <input type="checkbox" id="check" />
    <label htmlFor="check" className="icons" onClick={toggleMenu}>
      <div className={`menu-btn ${open ? 'open' : ''}`}>
        <div className="hamburger"></div>
      </div>
    </label>
    <nav className="navbar">
      <Link to="/" className={`navItem ${currentPage === '/' ? 'active' : ''}`} style={{ '--i': 0 }} >HOME</Link>
      <Link to="/nuestro-equipo" className={`navItem ${currentPage === '/nuestro-equipo' ? 'active' : ''}`} style={{ '--i': 1 }}>NUESTRO EQUIPO</Link>
      <Link to="/comunidad" className={`navItem ${currentPage === '/comunidad' ? 'active' : ''}`} style={{ '--i': 2 }}>TESTIMONIOS</Link>
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