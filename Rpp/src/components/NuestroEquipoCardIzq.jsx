import "./NuestroEquipoCardIzq.css"
import PropTypes from 'prop-types';

const NuestroEquipoCardIzq = ({ nombre,imagen, apellido }) => {
  return (
    <div className="container-img-izq">
     
      {/* cuadro amarillo */}
      <div className='cuadro-amarillo-izq'>
      </div>

       {/* Imagen  */}
       <img
        className="object-cover object-center imgizq"
        src={imagen}
        alt={`Imagen de ${nombre}`}
      />

      <div className='Nombre-izq text-black dark:text-gray-400' >
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
NuestroEquipoCardIzq.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
};
export default NuestroEquipoCardIzq;