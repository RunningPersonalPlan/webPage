import { useState, useRef, useEffect } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';
import Open from "../../assets/homelogo/arrow-up.svg";
import Close from "../../assets/homelogo/arrow-down.svg";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Crear una referencia

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px"; // Establecer maxHeight
                contentRef.current.style.visibility = "visible";
                contentRef.current.style.opacity = "1";
            } else {
                contentRef.current.style.maxHeight = "0px";
                contentRef.current.style.visibility = "hidden";
                contentRef.current.style.opacity = "0";
            }
        }
    }, [isOpen]); 

    // Efecto para inicializar el maxHeight cuando el componente se monta
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen ? contentRef.current.scrollHeight + "px" : "0px";
            contentRef.current.style.visibility = isOpen ? "visible" : "hidden";
            contentRef.current.style.opacity = isOpen ? "1" : "0";
        }
    }, []); // Efecto que se ejecuta al montar el componente

    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={toggleAccordion}>
                <div className="accordion-title-s">
                    <h2 >{title}</h2>
                    <div className='isopen-img'>
                        <img src={isOpen ? Open : Close} alt='logo isopen?' />
                    </div>
                </div>
            </button>
            <div 
                ref={contentRef} // Asignar la referencia al elemento
                className={`accordion-content ${isOpen ? 'open' : ''}`}
                dangerouslySetInnerHTML={{ __html: content }}
            >
            </div>
        </div>
    );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Accordion;