import React, { useState } from 'react';
import "./Home.css"

const Home = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
      };
  return (
   <div className='home'>
   <p>HOLI</p>
   </div>

   
  )
}

export default Home;