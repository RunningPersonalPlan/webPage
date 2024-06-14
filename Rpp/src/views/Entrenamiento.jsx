import React, { useEffect } from 'react';

const Entrenamiento = () => {
  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  }, []);

  return (
    <div className="container mx-auto py-10 md:py-20 mt-96 md:mt-20">
    <div className="bg-transparent p-6 rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">Plan de Entrenamiento</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lunes */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center md:block">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Lunes</h2>
          <ul className="text-white">
            <li>Correr: 5 km</li>
            <li>Pesas: 30 min</li>
            <li>Estiramientos: 15 min</li>
          </ul>
        </div>

        {/* Martes */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Martes</h2>
          <ul className="text-white">
            <li>Natación: 1 hora</li>
            <li>Yoga: 30 min</li>
          </ul>
        </div>

        {/* Miércoles */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Miércoles</h2>
          <ul className="text-white">
            <li>Ciclismo: 20 km</li>
            <li>Pesas: 30 min</li>
          </ul>
        </div>

        {/* Jueves */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Jueves</h2>
          <ul className="text-white">
            <li>Correr: 10 km</li>
            <li>Pesas: 45 min</li>
          </ul>
        </div>

        {/* Viernes */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Viernes</h2>
          <ul className="text-white">
            <li>Natación: 1 hora</li>
            <li>Yoga: 30 min</li>
          </ul>
        </div>

        {/* Sábado */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Sábado</h2>
          <ul className="text-white">
            <li>Ciclismo: 30 km</li>
            <li>Estiramientos: 30 min</li>
          </ul>
        </div>

        {/* Domingo */}
        <div className="bg-opacity-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Domingo</h2>
          <ul className="text-white">
            <li>Descanso</li>
            <li>Estiramientos: 20 min</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Entrenamiento;
