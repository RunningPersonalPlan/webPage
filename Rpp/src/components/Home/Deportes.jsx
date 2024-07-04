import './Deporte.css'; 
import running from "../../assets/DeportesLogo/Running.svg"
import ciclismo from "../../assets/DeportesLogo/ciclismo.svg"
import MEmbarazo from "../../assets/DeportesLogo/MEmbarazo.svg"
import HLife from "../../assets/DeportesLogo/heart-pulse.svg"
import Triathlon from "../../assets/DeportesLogo/Triathlon.svg"
import Duathlon from "../../assets/DeportesLogo/Duathlon.svg"
import Aquathlon from "../../assets/DeportesLogo/Aquathlon.svg"

const Button = () => {
  return (
    <div className="container-deportes" >
      <div className="container-deportes-card" id="card-running">
        <img src={running} alt="Running" />
        <p>Running</p>
      </div>
      <div className="container-deportes-card">
        <img src={ciclismo} alt="Ciclismo" />
        <p>Ciclismo</p>
      </div>
      <div className="container-deportes-card">
        <img src={MEmbarazo} alt="Mujeres en embarazo" />
        <p>Mujeres en embarazo</p>
      </div>
      <div className="container-deportes-card" id="card-hlife">
        <img src={HLife} alt="Healthy Life" />
        <p>Healthy Life</p>
      </div>
      <div className="container-deportes-card" id="card-triathlon">
        <img src={Triathlon} alt="Triathlon" />
        <p>Triathlon</p>
      </div>
      <div className="container-deportes-card">
        <img src={Duathlon} alt="Duathlon" />
        <p>Duathlon</p>
      </div>
      <div className="container-deportes-card" id="card-aquathlon">
        <img src={Aquathlon} alt="Aquathlon" />
        <p>Aquathlon</p>
      </div>
    </div>
  );
};

export default Button;