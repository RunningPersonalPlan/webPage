import React from 'react';
import "./Home.css"
import Boton1 from '../components/Boton1.jsx'

const Home = () => {
    
  return (
    <>
    <section className='header-img'>
      <section className="textos-header">
        <h1>Transforma tu sudor en éxito:</h1>
        <h1>¡Entrena hoy, triunfa mañana!</h1>
         <Boton1 name="Empieza Ahora" />
      </section>
      <div style={{ height: '150px', overflow: 'hidden' }} className='wave1'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M0.00,49.98 C224.88,242.28 327.59,-103.11 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000000' }}></path>
        </svg>
      </div>
    </section>
    </>


   
  )
}

export default Home;