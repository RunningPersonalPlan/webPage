import React from 'react';
import './Boton1.css'; 

const Button = ({ onClick,name }) => {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;