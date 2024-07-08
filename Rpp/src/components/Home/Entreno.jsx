import  "./Entreno.css"

const Entreno =() =>{
return(
    <>
     <div className="entreno-container">
        <div className="entreno-card">
            <span>1</span>
            <p>Entrenamientos 100% <span className="blood-entreno-p">personalizados</span></p>
        </div>
        <div className="entreno-card">
            <span>2</span>
            <p>Pruebas de campo y controles periódicos</p>
        </div>
        <div className="entreno-card">
            <span>3</span>
            <p>Zonas de frecuencia cardíaca y umbrales definidos</p>
        </div>
        <div className="entreno-card">
            <span>4</span>
            <p>Entrenamiento cruzado <span className="blood-entreno-p">(Cross-Training)</span> </p>
        </div>
        <div className="entreno-card">
            <span>5</span>
            <p>Fuerza general y funcional personalizada</p>
        </div>
        <div className="entreno-card">
            <span>6</span>
            <p>Sesiones <span className="blood-entreno-p">dinámicas y efectivas</span></p>
        </div>
     </div>
    </>
);
}

export default Entreno;