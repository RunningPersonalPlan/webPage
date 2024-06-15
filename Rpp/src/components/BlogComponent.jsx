import React from 'react';

const BlogComponent = ({ activity, title, image, description }) => {
  return (
    <div className="bg-transparent rounded-lg shadow-lg w-full sm:w-80 p-5 text-center  m-4">
      <div className="text-xl text-white mb-2">{activity}</div>
      <h2 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h2>
      <img src={image} alt="Imagen del evento" className="w-full h-auto rounded-lg mb-4" />
      <p className="text-white text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default BlogComponent;
