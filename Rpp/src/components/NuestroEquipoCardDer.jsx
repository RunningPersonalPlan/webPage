import React from 'react';
import "./NuestroEquipoCardDer.css"

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

export default NuestroEquipoCardDer;