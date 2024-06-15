import React from 'react';

const TrainingCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-transparent rounded-lg shadow-lg text-center max-w-sm">
      <div className="w-32 h-32 mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-yellow-400 text-xl font-bold mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default TrainingCard;
