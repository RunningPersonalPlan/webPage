import "./Home.css"
import Primary from "../assets/Primary.png"
import Deporte from "../components/Home/Deportes.jsx"
import Accordion from "../components/Home/Accordion.jsx";
import Seguridadtemp from "../templates/home/valores/seguridad.js"
import BienestarIntegral from "../templates/home/valores/BienestarIntegral.js";
import Resultados from "../templates/home/valores/Resultados.js";
import Valoresimg from "../assets/fotos-home/valoresimg.jpg"
import Entrenamientojpg from "../assets/fotos-home/Entrenamientojpg.jpg"
import { useRef, useState } from "react";
import Entreno from "../components/Home/Entreno.jsx";
import Alianzas from "../templates/home/entrenamiento/Alianzas.js";
import Asesorias from "../templates/home/entrenamiento/Asesorias.js";
import Fotografia from "../templates/home/entrenamiento/Fotografia.js";
import Planes from "../components/Home/Planes.jsx";
import Standard from "../templates/home/Planes/Standard.js";
import Premium from "../templates/home/Planes/Premium.js";
import PremiumPlus from "../templates/home/Planes/Premiunplus.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';


const Home = () => {
  const sectionSportRef = useRef(null);
  const scrollToSection = () => {
    if (sectionSportRef.current) {
      sectionSportRef.current.scrollIntoView({ behavior: 'smooth' });
    }};

    const [openIndex, setOpenIndex] = useState(null); 

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index); 
    };

    const [openIndex1, setOpenIndex1] = useState(null); 

    const handleToggle1 = (index) => {
        setOpenIndex1(index === openIndex1 ? null : index); 
    };
    
  return (
    <>
    <section className='header-img'>
      <section className="textos-header">
      <div className="label">
      <p className="ALCANZA-TU-MEJOR">
        <span className="text-wrapper">
        MATERIALIZA TU <br />
        </span>
        <span className="span">MEJOR VERSIÓN</span>
      </p>
      </div>

      <div className="label1">
      <p className="text-wrapper1">
        Te ayudamos a cuidar tu cuerpo y mente, entrenar de forma segura y alcanzar tus propósitos
      </p>
      </div>

      <div className="box1">
      <button className="rectangle" onClick={scrollToSection}>
      <div className="text-wrapper2">Conoce más</div>
      <span className="Primary">
        <img src={Primary} alt="icon"  /> 
      </span>
      </button>
      </div>
       
      </section>

    </section>

    <section className="section-pasion-deporte" >
        <h1  ref={sectionSportRef}>Encuentra tu pasión en el deporte</h1>
        <p>Descubre nuestros planes de running, cycling, triathlon y más, diseñados para ayudarte a alcanzar tu porpósito deportivo y personal</p>
        <Deporte/>
    </section>

    <section className="section-pasion-deporte">
        <h1>Nuestros valores, ¡tu tranquilidad!</h1>
        <p>Seguridad, bienestar integral y resultados visibles en cada entrenamiento</p>
        <div className="container">
          <div className="container-accordion">
          <Accordion 
                title="SEGURIDAD" 
                content={Seguridadtemp()} 
                isOpen={openIndex === 0} 
                onToggle={() => handleToggle(0)} 
            />
            <Accordion 
                title="BIENESTAR INTEGRAL" 
                content={BienestarIntegral()} 
                isOpen={openIndex === 1} 
                onToggle={() => handleToggle(1)} 
            />
            <Accordion 
                title="RESULTADOS" 
                content={Resultados()} 
                isOpen={openIndex === 2} 
                onToggle={() => handleToggle(2)} 
            />
          </div>
          <img src={Valoresimg} alt="Nuestros valores img" className="imagen-accordeon" />
        </div>
      </section>
    
      <section className="section-pasion-deporte" >
        <h1>Mucho más que un entrenamiento</h1>
        <p>Todos nuestros planes incluyen asesorías, alianzas estratégicas y fotografía profesional</p>
        <Entreno/>

        <div className="container">
        <img src={Entrenamientojpg} alt="Entrenamiento img" className="imagen-accordeon" />

          <div className="container-accordion">
          <Accordion 
                title="ALIANZAS" 
                content={Alianzas()} 
                isOpen={openIndex1 === 0} 
                onToggle={() => handleToggle1(0)} 
            />
            <Accordion 
                title="ASESORÍAS" 
                content={Asesorias()} 
                isOpen={openIndex1 === 1} 
                onToggle={() => handleToggle1(1)} 
            />
            <Accordion 
                title="FOTOGRAFÍA" 
                content={Fotografia()} 
                isOpen={openIndex1 === 2} 
                onToggle={() => handleToggle1(2)} 
            />
          </div>
          
        </div>
       
    </section>

    <section className="section-pasion-deporte" >
        <h1 >Empieza tu transformación hoy</h1>
        <p id="propositos">¿Listo para cumplir tus propósitos?</p>
        <p>Únete y descubre tu potencial con nuestros planes</p>
        <div className="Planes-card">
          <Planes
          className="card-planes-home"
          titulo = "PLAN STANDARD"
          contenido= {Standard()}
          tema="yellow-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan STANDARD . ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />
          <Planes
          className="card-planes-home"
          titulo = "PLAN PREMIUM"
          contenido={Premium()}
          tema="black-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan PREMIUM . ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />
          <Planes
          className="card-planes-home"
          titulo = "PLAN PREMIUM +"
          contenido={PremiumPlus()}
          tema="yellow-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan PREMIUM +. ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />
        </div>

        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="Planes-card--swiper"
      >
        <SwiperSlide>
        <Planes
          className="card-planes-home"
          titulo = "PLAN STANDARD"
          contenido= {Standard()}
          tema="yellow-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan STANDARD . ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />

        </SwiperSlide>
      
        <SwiperSlide>
        <Planes
          className="card-planes-home"
          titulo = "PLAN PREMIUM"
          contenido={Premium()}
          tema="black-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan PREMIUM . ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />

        </SwiperSlide>

        <SwiperSlide>
        <Planes
          className="card-planes-home"
          titulo = "PLAN PREMIUM +"
          contenido={PremiumPlus()}
          tema="yellow-card"
          mensajeWhatsApp="Hola, estoy interesado en obtener información y una cotización sobre su plan PREMIUM +. ¿Podrían proporcionarme más detalles sobre las opciones disponibles y los precios? Muchas gracias."
          />
        </SwiperSlide>
     
        
       </Swiper>
      
    </section>
 
    
    </>
 


   
  )
}

export default Home;