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
          Apasionado por la fisiología humana y el entrenamiento deportivo, especialmente en running, cycling y triatlón. 
          Disfruto del buen café, los quesos, el vino, el arte rústico y todo lo hecho a mano. Valoro la tranquilidad y los 
          estilos de vida saludable, y adoro el paisaje cultural cafetero con sus jeeps Willys CJ3B. Amo a mi esposa y familia, 
          y me apasiona acompañar a mis deportistas en sus procesos, ayudándoles a materializar sus propósitos.
          </p>

        </div>

        <div className='flex-area-1 flex gap-8  mx-8 md:mx-8 sm:mx-0 '>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white '>Educación</h1>
            <div className='flex-content-area-1'>
               <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li><span className="font-bold">Universidad de Cundinamarca </span>Licenciado en Educación Física (2011).</li>
                  <li><span className="font-bold">Comité Olímpico Internacional </span>Curso para entrenadores de triatlón, Cali (2010).</li>
                  <li><span className="font-bold">Federación Colombiana de Bádminton </span>Curso de acreditación para entrenadores de bádminton, Circasia (2011).</li>
               </ul>
            </div>
          </div>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white'>Trayectoria deportiva</h1>
            <div className='flex-content-area-1'>
            <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li><span className="font-bold">Liga de Cundinamarca de Triatlón </span>Triatleta profesional (2007-2010).</li>
                  <li><span className="font-bold">Finisher en pruebas de: </span>duatlón, triatlón, media maratón, MTB, trail running y running.</li>
               </ul>
            </div>

          </div>
        </div>
        <div className="w-full h-auto area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8">
        <h1 className='titulo-area-1 mb-8 text-black dark:text-white' >Experiencia</h1>
          <p className='content-area-1 text-gray-900 dark:text-gray-400'>
            <li>Personal Trainer desde (2010).</li>
            <li>Entrenador de bádminton, atletismo y natación en escuelas de formación (2009-2012).</li>
            <li>Entrenador de running para grupos empresariales de diversas compañías como Halliburton, Oracle, GM - Colmotores, Microsoft, Siemens, Av Villas (2011-2018).</li>
          </p>
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
          Soy Mónica Vargas, una mujer apasionada por el deporte, especialmente por el running y el triatlón. Para mí, el deporte no es solo una actividad física; es mi refugio y un camino hacia el autoconocimiento y la superación personal. Desde niña, el deporte ha sido mi medio para enfrentar los desafíos de la vida, y hoy me considero un ejemplo de perseverancia, disciplina y autenticidad. Soy madre de dos hijos, Junior y Alex Moreno Vargas. Cada vez que corro, recuerdo quién soy, qué quiero, y hacia dónde voy, encontrando en el running una fuente constante de gratitud y crecimiento personal.
            
          </p>

        </div>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8'>
          
            <h1 className='titulo-area-1 mb-8 text-black dark:text-white'>LOGROS DEPORTIVOS Y FORMACIÓN</h1>
            <div className='content-area-1'>
               <ul className='list-disc pl-5 space-y-2 content-area-1 text-gray-900 dark:text-gray-400'>
                <li>Enfermera UCI Neonatal, Fundación Valle del Lili (FVL).</li>
                <li>Fundación Universitaria del Área Andina Enfermería (2010).</li>
                <li>He corrido 4 maratones, con un PB de 3h:49’13” en Medellín.</li>
                <li>Soy triatleta de media distancia.</li>
                <li>He liderado múltiples eventos deportivos y me considero un referente para nuevos y experimentados deportistas.</li>
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
            Soy desarrollador de páginas web y entusiasta de la tecnología. Me encanta explorar nuevas herramientas y técnicas para crear sitios web modernos y funcionales, enfocándome en desarrollar interfaces intuitivas y eficientes, mejorando así la experiencia del usuario. Además, me apasiona la optimización de rendimiento y la escalabilidad de aplicaciones web.
          </p>

        </div>

        <div className='flex-area-1 flex gap-8  mx-8 md:mx-8 sm:mx-0 '>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white '>Trayectoria deportiva</h1>
            <div className='flex-content-area-1'>
              <p className='content-area-1 text-gray-900 dark:text-gray-400'>
              Valoro la disciplina ganada a través del deporte. Más allá de mantenerme en forma, el deporte es esencial para mi bienestar mental y emocional.
              </p>
            </div>
          </div>
          <div className='flex-area-1-content'>
            <h1 className='flex-titulo-area-1 mb-8 text-black dark:text-white'>FORMACIÓN</h1>
            <div className='flex-content-area-1'>
            <ul className='list-disc pl-5 space-y-2 text-gray-900 dark:text-gray-400'>
                  <li>Desarrollador full stack Henry</li>
                  <li>Arquitecturas CSS Platzi</li>
                  <li>Responsive Design: Maquetación Mobile First Platzi</li>
                  <li>Frontend Developer Platzi</li>
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
            Apasionado por las artes visuales: fotografía, diseño y animación. El minimalismo y la organización son pilares en mi vida, pero también disfruto desafiando lo convencional y buscando siempre la diferenciación. En mi tiempo libre, vivo y respiro ciclismo. Cada oportunidad que tengo, salgo a recorrer nuevos caminos en mi bicicleta, explorando paisajes, conectando con la naturaleza y capturando momentos únicos con mi cámara. Aunque actualmente me estoy interesando mucho por el running, la natación, y por ende, el triatlón.
            
          </p>

        </div>

        <div className='area-1 mb-8 mx-8 md:mx-8 sm:mx-0 mt-8'>
          
            <h1 className='titulo-area-1 mb-8 text-black dark:text-white '>LOGROS DEPORTIVOS Y FORMACIÓN</h1>
            <div className='content-area-1'>
               <ul className='list-disc pl-5 space-y-2 content-area-1 text-gray-900 dark:text-gray-400'>
                <li><span className="font-bold">Zona Cinco Escuela de Cine y Fotografía</span> Curso Profesional de Fotografía (2024).</li>
                <li><span className="font-bold">Fundación Universitaria del Área Andina</span> Diseño Gráfico (2022).</li>
                <li><span className="font-bold">Fundación Universitaria del Área Andina</span> Tecnologó en Animación y Posproducción Audiovisual (2020).</li>
                <li>10k Media Maratón de Bogotá (2024).</li>
                <li>Copa Do More (MTB), Fusagasugá (2023).</li>
                <li>Travesías MTB x6.</li>
               </ul>
            </div>
       
        </div>
        </div>
        
      </section>

      

   
     
    </div>
  );
};

export default NuestroEquipo;
