import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/RPPlogo.svg";
import whatsapp from "../assets/WhatsappLogo.svg"
import { FaInstagram } from "react-icons/fa";
import{MoonIcon} from '@heroicons/react/24/solid'
import {SunIcon} from '@heroicons/react/24/solid'
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Navbar.css"

const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

 
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
      };
  
    const[isToggled,setIsToggled]=useState(false)
    const toggled = (clickToggled) => {
        setIsToggled(clickToggled);
    };

    const renderIcon = () =>{
      if(!isToggled){
        return(
          <MoonIcon
          className="w-6 h-6  cursor-pointer text-blue-700"
          onClick={()=>toggled(!isToggled)}        
          />
        )
      }else{
        return(
          <SunIcon
          className='w-6 h-6  text-amber-500 cursor-pointer '
          onClick={()=>toggled(!isToggled)}    
          />
        )
      }
    }
           
    useEffect(() => {
      const pathname = location.pathname;
      setCurrentPage(pathname);
    }, [location]);   

    useEffect(() => {
      if (isToggled) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('bg-gray-800');
          document.body.classList.remove('bg-white');
      } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.add('bg-white');
          document.body.classList.remove('bg-gray-800');
      }
    }, [isToggled]);

  return (
   <header className="header dark:bg-slate-900 dark:text-white">
    <a href="/" className="logo">
    <svg width="27" height="44" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="logo dark:text-white"
    >
    <g id="planemos" clipPath="url(#clip0_5_13)">
    <path 
      className="fill-current text-black dark:text-white"
      id="Vector" 
      d="M20.8433 5.72712C22.4094 5.72712 23.6789 4.44506 23.6789 2.86356C23.6789 1.28206 22.4094 0 20.8433 0C19.2772 0 18.0077 1.28206 18.0077 2.86356C18.0077 4.44506 19.2772 5.72712 20.8433 5.72712Z" fill="#0F0F0F"/>
    <path 
      id="Vector_2" 
      className="fill-current text-black dark:text-white"
      d="M26.3951 11.3103C25.9636 10.6489 25.2932 10.1431 24.3801 9.79292C23.467 9.44275 22.292 9.26767 20.8549 9.26767H3.60231C3.3673 9.91742 3.14769 10.5283 2.93964 11.1041C2.73545 11.6799 2.51584 12.2907 2.28082 12.9405C2.23459 13.065 2.23844 13.1662 2.28082 13.2401C2.3232 13.314 2.41182 13.3529 2.53896 13.3529H10.9957C10.4717 14.8041 9.95163 16.2398 9.44692 17.6444C8.74957 19.5819 8.05608 21.5039 7.36644 23.4182C6.6768 25.3285 2.86259 35.7323 2.16909 37.6582C1.4756 39.5841 0.766697 41.5566 0.0346762 43.5837C-0.00770398 43.7082 -0.00770398 43.8094 0.0385289 43.8833C0.0847618 43.9611 0.169522 43.9961 0.296662 43.9961H4.53082C4.72731 43.4436 4.93921 42.86 5.16267 42.2336C5.38998 41.6072 5.62115 40.9575 5.86772 40.2844C6.46105 38.6347 10.152 28.5734 10.6914 27.0754C10.8069 26.7486 10.9264 26.4257 11.042 26.0989H14.286C14.286 26.0989 14.521 26.0989 14.8908 26.0794C14.9294 26.379 14.9717 26.6708 15.0141 26.9548C15.1644 28.0364 15.3378 29.192 15.5265 30.4176C15.5535 30.83 15.5227 31.1373 15.4264 31.3397C15.3339 31.542 15.1336 31.6937 14.8292 31.7949C14.7136 31.8338 14.6173 31.8649 14.5441 31.8882C14.4747 31.9116 14.3938 31.9388 14.3014 31.9738L13.7003 32.1723L12.1092 36.5337C12.0321 36.7438 12.2286 36.9501 12.4405 36.88L16.7671 35.4482C16.9328 35.3938 17.1447 35.3237 17.399 35.2342C17.6571 35.1448 17.8921 35.0669 18.104 34.9969C18.8592 34.744 19.4409 34.4678 19.857 34.1682C20.277 33.8686 20.5621 33.5029 20.7123 33.071C20.8626 32.6391 20.8819 32.0867 20.7701 31.4136C20.5313 30.1257 20.3001 28.8379 20.0805 27.554C19.9495 26.7992 19.8223 26.0366 19.6914 25.2701C20.4041 24.9822 21.0668 24.6165 21.6832 24.1769C22.5501 23.5543 23.3206 22.7918 23.991 21.8891C24.6614 20.9904 25.1969 19.9788 25.6015 18.8544L26.3335 16.8312C26.7457 15.6834 26.9653 14.6368 26.9961 13.6992C27.0231 12.7615 26.8266 11.9639 26.3951 11.2986V11.3103ZM21.7603 16.6561L20.9628 18.866C20.7008 19.5936 20.3579 20.1967 19.9379 20.683C19.5141 21.1693 19.0017 21.539 18.4045 21.788C17.8074 22.037 17.1139 22.1654 16.3202 22.1654H12.4598C12.9375 20.8347 13.4229 19.4886 13.9161 18.1151C14.2397 17.2125 14.5672 16.3098 14.8985 15.3994C15.1413 14.7224 15.3878 14.0377 15.6344 13.3568H19.4949C20.1383 13.3568 20.6507 13.4307 21.0283 13.5786C21.4058 13.7303 21.6832 13.9404 21.8566 14.2166C22.0261 14.4929 22.0993 14.8353 22.0801 15.2477C22.0531 15.6601 21.9452 16.127 21.7564 16.6522L21.7603 16.6561Z" fill="#0F0F0F"/>
    </g>
    <defs>
    <clipPath id="clip0_5_13">
    <rect width="27" height="44" fill="white"/>
    </clipPath>
    </defs>
    </svg>
     {/* <img src={logo} className='logo dark:text-white' alt='logo'/> */}
    </a>

    <input type="checkbox" id="check" />
    <label htmlFor="check" className="icons " onClick={toggleMenu}>
      <div className={`menu-btn ${open ? 'open' : ''} `}>
        <div className="hamburger dark:bg-gray-100 dark:before:bg-gray-100 dark:after:bg-gray-100 "></div>
      </div>
    </label>
    <nav className="navbar   dark:bg-slate-900 ">
   
      <Link to="/" className={`navItem ${currentPage === '/' ? 'active' : ''} dark:border-white`} style={{ '--i': 0 }} >HOME</Link>
      <Link to="/nuestro-equipo" className={`navItem ${currentPage === '/nuestro-equipo' ? 'active' : ''} dark:border-white`} style={{ '--i': 1 }}>NUESTRO EQUIPO</Link>
      <Link to="/comunidad" className={`navItem ${currentPage === '/comunidad' ? 'active' : ''} dark:border-white`} style={{ '--i': 2 }}>TESTIMONIOS</Link>
      <a href="https://wa.me/573107686892" className="navItem dark:border-white" id="whatsapp" style={{ '--i': 3 }}>
      <span className="whatsappspan" >
        <img src={whatsapp} alt="whatsappicon"  /> 
      </span>
      CONTACTO
      </a>
      <div className=' ' id='icon-dark' >
        {renderIcon()}
      </div>
     
      
      <div className="icons-nav " style={{ '--i': 4 }}>
        <a href="/" className="logo">
        <svg width="27" height="44" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="logo dark:text-white"
        >
          <g id="planemos" clipPath="url(#clip0_5_13)">
          <path 
            className="fill-current text-black dark:text-white"
            id="Vector" 
            d="M20.8433 5.72712C22.4094 5.72712 23.6789 4.44506 23.6789 2.86356C23.6789 1.28206 22.4094 0 20.8433 0C19.2772 0 18.0077 1.28206 18.0077 2.86356C18.0077 4.44506 19.2772 5.72712 20.8433 5.72712Z" fill="#0F0F0F"/>
          <path 
            id="Vector_2" 
            className="fill-current text-black dark:text-white"
            d="M26.3951 11.3103C25.9636 10.6489 25.2932 10.1431 24.3801 9.79292C23.467 9.44275 22.292 9.26767 20.8549 9.26767H3.60231C3.3673 9.91742 3.14769 10.5283 2.93964 11.1041C2.73545 11.6799 2.51584 12.2907 2.28082 12.9405C2.23459 13.065 2.23844 13.1662 2.28082 13.2401C2.3232 13.314 2.41182 13.3529 2.53896 13.3529H10.9957C10.4717 14.8041 9.95163 16.2398 9.44692 17.6444C8.74957 19.5819 8.05608 21.5039 7.36644 23.4182C6.6768 25.3285 2.86259 35.7323 2.16909 37.6582C1.4756 39.5841 0.766697 41.5566 0.0346762 43.5837C-0.00770398 43.7082 -0.00770398 43.8094 0.0385289 43.8833C0.0847618 43.9611 0.169522 43.9961 0.296662 43.9961H4.53082C4.72731 43.4436 4.93921 42.86 5.16267 42.2336C5.38998 41.6072 5.62115 40.9575 5.86772 40.2844C6.46105 38.6347 10.152 28.5734 10.6914 27.0754C10.8069 26.7486 10.9264 26.4257 11.042 26.0989H14.286C14.286 26.0989 14.521 26.0989 14.8908 26.0794C14.9294 26.379 14.9717 26.6708 15.0141 26.9548C15.1644 28.0364 15.3378 29.192 15.5265 30.4176C15.5535 30.83 15.5227 31.1373 15.4264 31.3397C15.3339 31.542 15.1336 31.6937 14.8292 31.7949C14.7136 31.8338 14.6173 31.8649 14.5441 31.8882C14.4747 31.9116 14.3938 31.9388 14.3014 31.9738L13.7003 32.1723L12.1092 36.5337C12.0321 36.7438 12.2286 36.9501 12.4405 36.88L16.7671 35.4482C16.9328 35.3938 17.1447 35.3237 17.399 35.2342C17.6571 35.1448 17.8921 35.0669 18.104 34.9969C18.8592 34.744 19.4409 34.4678 19.857 34.1682C20.277 33.8686 20.5621 33.5029 20.7123 33.071C20.8626 32.6391 20.8819 32.0867 20.7701 31.4136C20.5313 30.1257 20.3001 28.8379 20.0805 27.554C19.9495 26.7992 19.8223 26.0366 19.6914 25.2701C20.4041 24.9822 21.0668 24.6165 21.6832 24.1769C22.5501 23.5543 23.3206 22.7918 23.991 21.8891C24.6614 20.9904 25.1969 19.9788 25.6015 18.8544L26.3335 16.8312C26.7457 15.6834 26.9653 14.6368 26.9961 13.6992C27.0231 12.7615 26.8266 11.9639 26.3951 11.2986V11.3103ZM21.7603 16.6561L20.9628 18.866C20.7008 19.5936 20.3579 20.1967 19.9379 20.683C19.5141 21.1693 19.0017 21.539 18.4045 21.788C17.8074 22.037 17.1139 22.1654 16.3202 22.1654H12.4598C12.9375 20.8347 13.4229 19.4886 13.9161 18.1151C14.2397 17.2125 14.5672 16.3098 14.8985 15.3994C15.1413 14.7224 15.3878 14.0377 15.6344 13.3568H19.4949C20.1383 13.3568 20.6507 13.4307 21.0283 13.5786C21.4058 13.7303 21.6832 13.9404 21.8566 14.2166C22.0261 14.4929 22.0993 14.8353 22.0801 15.2477C22.0531 15.6601 21.9452 16.127 21.7564 16.6522L21.7603 16.6561Z" fill="#0F0F0F"/>
          </g>
          <defs>
          <clipPath id="clip0_5_13">
          <rect width="27" height="44" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        </a>
        <a href="https://www.instagram.com/runningpersonalplan/" className="logo" >
          <FaInstagram className='icon-react' />
        </a>
        <a href="https://www.tiktok.com/@rppcol?_t=8nUu0F3HIrV&_r=1" className="logo">
          <FaTiktok className='icon-react'/>
        </a>
        <a href="https://www.linkedin.com/" className="logo">
          <FaLinkedin className='icon-react'/>
        </a>
        {renderIcon()}
      </div>
    </nav>
   
  </header>

   
  )
}

export default Navbar;