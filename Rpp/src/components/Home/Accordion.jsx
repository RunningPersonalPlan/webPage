import { useState } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';
import Open from "../../assets/homelogo/arrow-up.svg"
import Close from "../../assets/homelogo/arrow-down.svg"
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={toggleAccordion}>
                <div className="accordion-title">
                    <h2>{title}</h2>
                    <div className='isopen-img'>
                        <img src={isOpen ? Open : Close} alt='logo isopen?' />
                    </div>
                   
                </div>
            </button>
            {isOpen && (
                <div 
                className="accordion-content"
                dangerouslySetInnerHTML={{ __html: content }}>
                    
                </div>
            )}
        </div>
    );
};
Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
 
};
export default Accordion;