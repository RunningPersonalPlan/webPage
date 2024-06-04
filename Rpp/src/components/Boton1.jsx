import React from 'react';
import './Boton1.css'; 

const Button = ({ name }) => {
  return (
    <button className="presentacion--imagen">
      {name}
    </button>
  );
};

export default Button;