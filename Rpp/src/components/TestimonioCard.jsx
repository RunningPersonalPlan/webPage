import React from 'react';

const TestimonioCard = ({ nombre, deporte, profesion, descripcion, imagen }) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Imagen del testimonio */}
      <img
        className="w-full h-56 object-cover object-center"
        src={imagen}
        alt={`Imagen de ${nombre}`}
      />

      {/* Contenedor del contenido */}
      <div className="p-4 bg-transparent">
        {/* Título del testimonio */}
        <h2 className="text-xl font-semibold mb-2 text-yellow-400">Testimonio</h2>

        {/* Información del testimonio */}
        <div className="text-white">
          <p className="mb-2"><strong>Nombre:</strong> {nombre}</p>
          <p className="mb-2"><strong>Deporte:</strong> {deporte}</p>
          <p className="mb-2"><strong>Profesión:</strong> {profesion}</p>
          <p className="mb-4"><strong>Descripción:</strong> {descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonioCard;