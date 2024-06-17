import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="text-lg text-white mb-4">Formulario enviado</div>
      <p className="text-lg text-white mb-8">Gracias por enviar tu formulario. Estaremos en contacto contigo pronto.</p>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate('/')}
      >
        Volver a Home
      </button>
    </div>
  );
};

export default FormSubmitted;