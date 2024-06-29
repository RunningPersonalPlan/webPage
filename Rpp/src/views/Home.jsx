import "./Home.css"
import Primary from "../assets/Primary.png"

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
    <section className='servicios'>
      <div className='container-titulos'>
        <h1 className='tiulo-sevicios'>Estos son los servicios que ofrecemos</h1>
        <h2 className='subtitulo-servicios'>Entrenamiento personalizados y apoyo continuo para alcanzar tus metas deportivas</h2>
      </div>
      <div className="container-servicios">
        <div className='e-personal'>
          <h1>ENTRENAMIENTO PERSONAL Y AUTÓNOMO</h1>
          <h2>Nos adaptamos a tus necesidades. Entrena a tu ritmo y logra tus metas deportivas con nuestro apoyo.</h2>
        </div>
        <div className='e-personal1'>
          <h1>MICRO CICLOS</h1>
          <h2>Incluyen entrenamientos de flexibilidad, fuerza y cross training. Diseñados para mejorar tu rendimiento integral y prevenir lesiones.
          </h2>
        </div>
      </div>
      
    </section>
    
    </>
 


   
  )
}

export default Home;