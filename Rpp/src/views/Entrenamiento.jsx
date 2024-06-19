import React from 'react';
import NuestroEquipoCardIzq from "../components/NuestroEquipoCardIzq.jsx"
import eduardoimg from "../assets/Eduardoimg.png";
import "./NuestroEquipo.css"
const Entrenamiento = () => {
  

  return (
    <div className="min-h-screen mt-20">
      <h1 className="titulo-entreno">NUESTRO<span className="titulo-amarillo"> EQUIPO</span></h1>

      <section className='flex flex-col justify-center'>
        <div className="flex flex-wrap justify-center gap-6">
        
          <NuestroEquipoCardIzq
            key="Eduardo González"
            nombre="Eduardo"
            apellido="González"
            imagen={eduardoimg}
          />
    
        </div> 
        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8' >
          <h1 className='titulo-area-1 mb-8' >CEO / HEAD COACH</h1>
          <p className='content-area-1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore, tenetur
             tempore accusamus nemo quasi. Aliquam nulla id rerum eos aliquid assumenda, 
             repudiandae, perferendis, explicabo a repellendus ex. Sit, suscipit. Lorem ipsum 
             dolor sit amet, consectetur adipisicing elit. Animi, consequatur molestiae! Laborum 
             deserunt facilis impedit sit libero accusamus, eum vero quod quisquam odit? Nam nobis 
             aperiam corporis eveniet minima repellendus.
          </p>

        </div>

        <div className='flex-area-1 flex gap-8  mx-8 md:mx-8 sm:mx-0 '>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 '>LOGROS DEPORTIVOS</h1>
            <p className='flex-content-area-1'>
               <ul className='list-disc pl-5 space-y-2'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea at cum sint recusandae consequatur quo aperiam eveniet autem odit libero eius. Pariatur debitis culpa officiis quam placeat?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores eaque molestias, molestiae eos minima dolores delectus quaerat cum quas velit saepe explicabo minus veritatis corporis quo tempore ad fugiat?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit cumque, nam doloribus laboriosam. Impedit, delectus perferendis molestiae, inventore aspernatur minus quae nulla sed ut culpa illum debitis possimus!</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque aut impedit, saepe vero nesciunt! Tenetur, dolore ullam quas vel sed amet illum, asperiores labore temporibus reiciendis obcaecati quis. 4</li>
               </ul>
            </p>
          </div>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8'>FORMACIÓN</h1>
            <p className='flex-content-area-1'>
            <ul className='list-disc pl-5 space-y-2'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi, sunt, necessitatibus atque possimus aspernatur quod odio magni consequuntur fugit aliquam voluptatibus. Illum distinctio sint labore consequatur perferendis eveniet harum!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum laudantium, dolores vero sed accusamus distinctio autem, tempore iste aliquam eveniet adipisci quo totam cum vitae? Incidunt nulla pariatur sunt?</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil vero? Voluptas at mollitia architecto voluptate harum incidunt sed aliquam voluptatibus, ea earum. Labore libero cupiditate similique quidem voluptas provident? </li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veniam aliquid cum perspiciatis ut, libero a fuga quo magni odio totam quidem labore dolores culpa optio, nemo vel commodi voluptatibus.</li>
               </ul>
            </p>

          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Entrenamiento;
