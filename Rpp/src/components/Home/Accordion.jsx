import {  useRef, useEffect } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';
import Open from "../../assets/homelogo/arrow-up.svg";
import Close from "../../assets/homelogo/arrow-down.svg";

const Accordion = ({ title, content, isOpen, onToggle }) => {
    
    const contentRef = useRef(null); // Crear una referencia

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


    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={onToggle}>
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
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Accordion;