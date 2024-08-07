import NuestroEquipoCardIzq from "../components/NuestroEquipoCardIzq.jsx"
import eduardoimg from "../assets/Eduardoimg.png";
import Monica from "../assets/Monica.png";
import Nicolas from "../assets/Nicolas.png"
import OscarAndres from "../assets/OscarAndres.png"
import "./NuestroEquipo.css"
import NuestroEquipoCardDer from '../components/NuestroEquipoCardDer.jsx';
const NuestroEquipo = () => {
  

  return (
    <div className="min-h-screen mt-20">
      <h1 className="titulo-entreno text-black dark:text-white">NUESTRO<span className="titulo-amarillo"> EQUIPO</span></h1>

      <section className='flex flex-col justify-center'>
        <div className="flex flex-wrap justify-center gap-6">
        
          <NuestroEquipoCardIzq
            key="EDUARDO GONZÁLEZ"
            nombre="EDUARDO"
            apellido="GONZÁLEZ"
            imagen={eduardoimg}
          />
    
        </div> 
        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8' >
          <h1 className='titulo-area-1 mb-8 text-black dark:text-white' >CEO / HEAD COACH</h1>
          <p className='content-area-1 text-gray-900 dark:text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore, tenetur
             tempore accusamus nemo quasi. Aliquam nulla id rerum eos aliquid assumenda, 
             repudiandae, perferendis, explicabo a repellendus ex. Sit, suscipit. Lorem ipsum 
          </p>

        </div>

        <div className='flex-area-1 flex gap-8  mx-8 md:mx-8 sm:mx-0 '>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white '>LOGROS DEPORTIVOS</h1>
            <div className='flex-content-area-1'>
               <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>
          </div>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white'>FORMACIÓN</h1>
            <div className='flex-content-area-1'>
            <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>

          </div>
        </div>
      </section>

      <section className='flex  justify-center mt-8 sectionizq'>
        <div className="flex  justify-center gap-6">
        
          <NuestroEquipoCardDer
            key="MONICA VARGAS"
            nombre="MONICA"
            apellido="VARGAS"
            imagen={Monica}
          />
    
        </div> 

        <div className='containerder'>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8' >
          <h1 className='titulo-area-1 mb-8 text-black dark:text-white' >CEO / CO FOUNDER</h1>
          <p className='content-area-1 text-gray-900 dark:text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore, tenetur
             tempore accusamus nemo quasi. Aliquam nulla id rerum eos aliquid assumenda, 
             repudiandae, perferendis, explicabo a repellendus ex. Sit, suscipit. Lorem ipsum 
            
          </p>

        </div>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8'>
          
            <h1 className='titulo-area-1 mb-8 text-black dark:text-white'>LOGROS DEPORTIVOS Y FORMACIÓN</h1>
            <div className='content-area-1'>
               <ul className='list-disc pl-5 space-y-2 content-area-1 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>
       
        </div>
        </div>
        
      </section>

      <section className='flex flex-col justify-center'>
        <div className="flex flex-wrap justify-center gap-6">
        
          <NuestroEquipoCardIzq
            key="NICOLÁS INCHASUTEGUI"
            nombre="NICOLÁS"
            apellido="I. GONZÁLEZ"
            imagen={Nicolas}
          />
    
        </div> 
        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8' >
          <h1 className='titulo-area-1 mb-8 text-black dark:text-white' >DESARROLLADOR WEB</h1>
          <p className='content-area-1 text-gray-900 dark:text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore, tenetur
             tempore accusamus nemo quasi. Aliquam nulla id rerum eos aliquid assumenda, 
             repudiandae, perferendis, explicabo a repellendus ex. Sit, suscipit. Lorem ipsum 
          </p>

        </div>

        <div className='flex-area-1 flex gap-8  mx-8 md:mx-8 sm:mx-0 '>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white '>LOGROS DEPORTIVOS</h1>
            <div className='flex-content-area-1'>
               <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>
          </div>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white'>FORMACIÓN</h1>
            <div className='flex-content-area-1'>
            <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>

          </div>
        </div>
      </section>

      <section className='flex  justify-center mt-8 sectionizq'>
        <div className="flex  justify-center gap-6">
        
          <NuestroEquipoCardDer
            key="ANDRÉS GONZÁLEZ"
            nombre="ANDRÉS"
            apellido="GONZÁLEZ"
            imagen={OscarAndres}
          />
    
        </div> 

        <div className='containerder'>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8' >
          <h1 className='titulo-area-1 mb-8 text-black dark:text-white' >DIRECTOR CREATIVO</h1>
          <p className='content-area-1 text-gray-900 dark:text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore, tenetur
             tempore accusamus nemo quasi. Aliquam nulla id rerum eos aliquid assumenda, 
             repudiandae, perferendis, explicabo a repellendus ex. Sit, suscipit. Lorem ipsum 
            
          </p>

        </div>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8'>
          
            <h1 className='titulo-area-1 mb-8 text-black dark:text-white '>LOGROS DEPORTIVOS Y FORMACIÓN</h1>
            <div className='content-area-1'>
               <ul className='list-disc pl-5 space-y-2 content-area-1 text-gray-900 dark:text-gray-400'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt culpa, ea</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiore</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ab suscipit</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non suscipit neque</li>
               </ul>
            </div>
       
        </div>
        </div>
        
      </section>

      

   
     
    </div>
  );
};

export default NuestroEquipo;
