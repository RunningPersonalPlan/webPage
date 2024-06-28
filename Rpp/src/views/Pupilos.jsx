import React, { useState } from 'react'
import Carousel from '../components/Carousel.jsx'
import "./Blog.css"


const slides = [
  {
    image1: 'https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-ligero-ciudad-moda-gente.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Slide 1',
    text: 'This is the first slide',
    image2: 'https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-madera-paisaje-agua-montana.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    image1: 'https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-ligero-ciudad-moda-gente.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Slide 2',
    text: 'This is the first slide',
    image2: 'https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-madera-paisaje-agua-montana.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    image1: 'https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-ligero-ciudad-moda-gente.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Slide 3',
    text: 'This is the first slide',
    image2: 'https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-madera-paisaje-agua-montana.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
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

