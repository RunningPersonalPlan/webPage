import React from 'react';
import "./NuestroEquipoCardIzq.css"

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

      <div className='Nombre-izq' >
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

export default NuestroEquipoCardIzq;