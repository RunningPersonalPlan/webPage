import Carousel from '../components/Carousel.jsx'
import "./Blog.css"


const slides = [
  {
    image1: 'https://media.istockphoto.com/id/1166665033/es/foto/fondo-deportivo-corredor-en-la-salida-imagen-en-blanco-y-negro-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=haFSJYocyk1ybkF74wQoXdCYsQ05KWxFBpkuyzS7WAc=',
    title: 'Slide 1',
    text: 'This is the first slide',
    image2: 'https://media.istockphoto.com/id/1216520718/es/foto/color-dorado-desenfocado-part%C3%ADculas-digitales-tecnolog%C3%ADa-de-flujo-de-ondas-concepto-de-fondo.jpg?s=612x612&w=0&k=20&c=w9YP0R-6JvzwtRBctA7Iemx2qaKyj86vMapx58bY16A=',
  },
  {
    image1: 'https://media.istockphoto.com/id/1142900322/es/foto/happy-runner-femenina-corriendo-por-la-ma%C3%B1ana-en-la-naturaleza.jpg?s=2048x2048&w=is&k=20&c=oRpCMIwPG32eZNm8yyI4Gnk5WnwJ966p-Q7mfB5kGxU=',
    title: 'Slide 2',
    text: 'This is the first slide',
    image2: 'https://media.istockphoto.com/id/854381962/es/foto/ilustraci%C3%B3n-3d-de-un-gr%C3%A1fico-de-carta-o-l%C3%ADnea-curva.jpg?s=612x612&w=0&k=20&c=wEfoyxFzN_3GbfyAdvxBa7grQDPMQxVyufWrdbATgzo=',
  },
  {
    image1: 'https://media.istockphoto.com/id/1319189368/es/foto/un-hombre-adulto-medio-est%C3%A1-escuchando-m%C3%BAsica-en-el-parque.jpg?s=612x612&w=0&k=20&c=X3uoJo-1efCnLZkB0QehwhonzOwTmp6RIbm5FyNbJ1I=',
    title: 'Slide 3',
    text: 'This is the first slide',
    image2: 'https://media.istockphoto.com/id/544338650/es/foto/gr%C3%A1fico-financiero-t%C3%A9cnico-sobre-el-fondo-abstracto-de-la-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=jG_xxY_1eYm4emxP2qzvK1u3rhuS9Wad24rLa75sFZ4=',
  },
 
];

const Pupilos = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 sm:px-10 lg:px-20">
      <h1 className="titulo-pupilos-black">ALGUNOS DE </h1>
      <h1 className='titulo-pupilos-yellow'>NUESTROS PUPILOS</h1>
      <Carousel slides={slides} />
     
    </div>
  );
};

export default Pupilos;

