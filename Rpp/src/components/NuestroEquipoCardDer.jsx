import "./NuestroEquipoCardDer.css"
import PropTypes from 'prop-types';

const NuestroEquipoCardDer = ({ nombre,imagen, apellido }) => {
  return (
    <div className="container-img-der">
     
      {/* cuadro amarillo */}
      <div className='cuadro-amarillo-der'>
      </div>

       {/* Imagen  */}
       <img
        className="object-cover object-center imgder"
        src={imagen}
        alt={`Imagen de ${nombre}`}
      />

      <div className='Nombre-der' >
      <h1 >
        {nombre}
      </h1>
      <h1>
        {apellido}
      </h1>

      </div>

      
     
    </div>
  );
};

NuestroEquipoCardDer.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
};

export default NuestroEquipoCardDer;