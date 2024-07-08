import "./Planes.css"
import PropTypes from 'prop-types'
import yellowbutton from "../../assets/yellowbutton.svg"
import blackbutton from "../../assets/blackbutton.svg"

const Planes =({titulo,contenido, tema, mensajeWhatsApp}) =>{
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/573107686892?text=${encodeURIComponent(mensajeWhatsApp)}`;
        window.open(whatsappUrl, '_blank');
    };
    return(
        <>
            <div className={`planes-container-card ${tema} `}>
                <h1 className="titulo-card">{titulo}</h1>
                <div
                 className="card-content"
                 dangerouslySetInnerHTML={{ __html: contenido }}>

                </div>
                <button onClick={handleWhatsAppClick} className="whatsapp-button-planes">
                <div className="text-Button">Contáctanos</div>
                    <span className="Icon-Button">
                        <img src={tema==="yellow-card"?yellowbutton:blackbutton} alt="icon"  /> 
                    </span>
                </button>
                <p className="fotter-card-planes">
                *Nota: Se requiere reloj deportivo Garmin, Polar o Coros y una prueba de esfuerzo con medico deportólogo.
                </p>

            </div>
        </>
    )
}

Planes.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    tema: PropTypes.string.isRequired,
    mensajeWhatsApp: PropTypes.string.isRequired,
    
};

export default Planes;