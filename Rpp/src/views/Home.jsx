import "./Home.css"
import Primary from "../assets/Primary.png"
import Deporte from "../components/Home/Deportes.jsx"

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
      <button className="rectangle" onClick={handleRedirect}>
      <div className="text-wrapper2">Conoce más</div>
      <span className="Primary">
        <img src={Primary} alt="icon"  /> 
      </span>
      </button>
      </div>
       
      </section>

    </section>

    <section className="section-pasion-deporte">
        <h1>Encuentra tu pasión en el deporte</h1>
        <p>Descubre nuestros planes de running, cycling, triathlon y más, diseñados para ayudarte a alcanzar tu porpósito deportivo y personal</p>
        <Deporte/>
    </section>
    
      
 
    
    </>
 


   
  )
}

export default Home;