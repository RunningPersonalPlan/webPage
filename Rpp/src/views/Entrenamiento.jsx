import React from 'react';
import NuestroEquipoCardIzq from "../components/NuestroEquipoCardIzq.jsx"
import eduardoimg from "../assets/Eduardoimg.png";
import "./NuestroEquipo.css"
const Entrenamiento = () => {
  

  return (
    <div className="min-h-screen mt-20">
      <h1 className="titulo-entreno">NUESTRO<span className="titulo-amarillo"> EQUIPO</span></h1>

      <section>
        <div className="flex flex-wrap justify-center gap-6">
        
          <NuestroEquipoCardIzq
            key="Eduardo González"
            nombre="Eduardo"
            apellido="González"
            imagen={eduardoimg}
          />
    
        </div> 
        <div>
          
        </div>
      </section>
     
    </div>
  );
};

export default Entrenamiento;
