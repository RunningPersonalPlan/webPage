import "./Home.css"
import Primary from "../assets/Primary.png"
import Deporte from "../components/Home/Deportes.jsx"
import Accordion from "../components/Home/Accordion.jsx";
import Seguridadtemp from "../templates/home/valores/seguridad.js"
import BienestarIntegral from "../templates/home/valores/BienestarIntegral.js";
import Resultados from "../templates/home/valores/Resultados.js";
import Valoresimg from "../assets/fotos-home/valoresimg.jpg"
import { useRef } from "react";


const Home = () => {
  const sectionSportRef = useRef(null);
  const scrollToSection = () => {
    if (sectionSportRef.current) {
      sectionSportRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
            key={"SEGURIDAD"} 
            title={"SEGURIDAD"} 
            content={Seguridadtemp()}

            />
              <Accordion 
            key={"BIENESTAR INTEGRAL"} 
            title={"BIENESTAR INTEGRAL"} 
            content={BienestarIntegral()}

            />
               <Accordion 
            key={"RESULTADOS"} 
            title={"RESULTADOS"} 
            content={Resultados()}

            />
          </div>
          <img src={Valoresimg} alt="Nuestros valores img" className="imagen-accordeon" />
        </div>
        
       

    </section>
    
      
 
    
    </>
 


   
  )
}

export default Home;