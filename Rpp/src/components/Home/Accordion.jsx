import {  useRef, useEffect } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';
import Open from "../../assets/homelogo/arrow-up.svg";
import Close from "../../assets/homelogo/arrow-down.svg";
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Accordion = ({ title, content, isOpen, onToggle }) => {
    
    const contentRef = useRef(null); // Crear una referencia

    const renderOpen = ()=>{
        if(isOpen){
            return(
                <ChevronUpIcon
                    className='w-full h-full text-black cursor-pointer dark:text-white'
                />
            )
        }else{
            return(
                <ChevronDownIcon
                    className='w-full h-full text-black cursor-pointer dark:text-white'
                />
            )
        }
    }

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
                    <h2 className='text-black dark:text-white' >{title}</h2>
                    <div className='isopen-img'>
                        {renderOpen()}
                    </div>
                </div>
            </button>
            <div 
                ref={contentRef} // Asignar la referencia al elemento
                className={`accordion-content ${isOpen ? 'open' : ''} text-gray-900 dark:text-gray-400`}
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