import React from 'react';
import "./Home.css"
import Primary from "../assets/Primary.png"
import imgAbout1 from "../assets/ImgAboutUs.jpg"
import TestimonioCard from '../components/TestimonioCard.jsx';

const testimonios = [
  {
    nombre: 'Juan Pérez',
    deporte: 'Fútbol',
    profesion: 'Jugador Profesional',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ligula quis porttitor blandit.',
    imagen: 'https://via.placeholder.com/300', // URL de la imagen del testimonio
  },
  {
    nombre: 'María García',
    deporte: 'Tenis',
    profesion: 'Entrenadora',
    descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imagen: 'https://via.placeholder.com/300', // URL de la imagen del testimonio
  },
  {
    nombre: 'María García',
    deporte: 'Tenis',
    profesion: 'Entrenadora',
    descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imagen: 'https://via.placeholder.com/300', // URL de la imagen del testimonio
  },
];


const Home = () => {

  const handleRedirect = () => {
    window.open('https://wa.me/573107686892', '_blank');
    console.log("hizo click")
  };
    
  return (
    <>
    <section className='header-img'>
      <section className="textos-header">
      <div className="label">
      <p className="ALCANZA-TU-MEJOR">
        <span className="text-wrapper">
          ALCANZA TU <br />
        </span>
        <span className="span">MEJOR VERSIÓN</span>
      </p>
      </div>

      <div className="label1">
      <p className="text-wrapper1">
        Te ayudamos a cuidar tu cuerpo y mente, entrenar de forma segura y alcanzar tus metas.
      </p>
      </div>

      <div className="box1">
      <button className="rectangle" onClick={handleRedirect}>
      <div className="text-wrapper2">Conoce más</div>
      <span className="Primary">
        <img src={Primary} alt="icon"  /> 
      </span>
      </button>
      </div>
       
      </section>
    </section>
    <section className="seccionComunH">
      <aside className='asideText'>
        <h1 className='text-yellow-300'>Sobre Nosotros</h1>
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

    <div className="mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-300">Testimonios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mapeamos cada testimonio para mostrarlo utilizando TestimonioCard */}
        {testimonios.map((testimonio, index) => (
          <TestimonioCard
            key={index}
            nombre={testimonio.nombre}
            deporte={testimonio.deporte}
            profesion={testimonio.profesion}
            descripcion={testimonio.descripcion}
            imagen={testimonio.imagen}
          />
        ))}
      </div>
    </div>
    
    </>
 


   
  )
}

export default Home;