import React from 'react';
import "./Home.css"
import Boton1 from '../components/Boton1.jsx'
import imgAbout1 from "../assets/ImgAboutUs.jpg"

const Home = () => {

  const handleRedirect = () => {
    window.open('https://wa.me/573107686892', '_blank');
    console.log("hizo click")
  };
    
  return (
    <>
    <section className='header-img'>
      <section className="textos-header">
        <h1>Más que un entrenamiento, </h1>
        <h1>una experiencia transformadora.</h1>
         <Boton1  onClick={handleRedirect} name="Empieza Ahora" />
      </section>
      <div style={{ height: '150px', overflow: 'hidden' }} className='wave1'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C224.88,242.28 327.59,-103.11 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000000' }}></path>
        </svg>
      </div>
    </section>
    <section className="seccionComunH">
      <aside className='asideText'>
        <h1>Sobre Nosotros</h1>
        <p>
        En Running Personal Plan, somos un equipo de profesionales convencidos del poder transformador 
        del running y comprometidos con el bienestar de las personas. Creemos que esta disciplina no 
        solo mejora la condición física, sino que también tiene un impacto positivo en la salud mental, 
        la autoestima y el bienestar general.
        </p>
      </aside>

      <aside className='asideText containerImg'>
        <img src={imgAbout1} className='aboutUsImg'/>
      </aside>      

    </section>
    
    </>


   
  )
}

export default Home;