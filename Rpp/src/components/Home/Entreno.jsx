import  "./Entreno.css"

const Entreno =() =>{
return(
    <>
     <div className="entreno-container">
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">1</span>
            <p className="text-gray-800 dark:text-gray-400" >Entrenamientos 100% <span className="blood-entreno-p">personalizados</span></p>
        </div>
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">2</span>
            <p className="text-gray-800 dark:text-gray-400">Pruebas de campo y controles periódicos</p>
        </div>
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">3</span>
            <p className="text-gray-800 dark:text-gray-400">Zonas de frecuencia cardíaca y umbrales definidos</p>
        </div>
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">4</span>
            <p className="text-gray-800 dark:text-gray-400">Entrenamiento cruzado <span className="blood-entreno-p">(Cross-Training)</span> </p>
        </div>
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">5</span>
            <p className="text-gray-800 dark:text-gray-400">Fuerza general y funcional personalizada</p>
        </div>
        <div className="entreno-card border border-black dark:border-white">
            <span className="text-black dark:text-white">6</span>
            <p className="text-gray-800 dark:text-gray-400">Sesiones <span className="blood-entreno-p">dinámicas y efectivas</span></p>
        </div>
     </div>
    </>
);
}

export default Entreno;