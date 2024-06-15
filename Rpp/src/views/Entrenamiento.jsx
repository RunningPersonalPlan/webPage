import React from 'react';
import TrainingCard from '../components/TrainingCard';
const Entrenamiento = () => {
  const trainings = [
    {
      title: 'React Vite Training',
      description: 'Learn how to build fast and modern web applications with React and Vite.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Advanced React',
      description: 'Deep dive into advanced concepts of React for building complex applications.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Advanced React',
      description: 'Deep dive into advanced concepts of React for building complex applications.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Advanced React',
      description: 'Deep dive into advanced concepts of React for building complex applications.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Advanced React',
      description: 'Deep dive into advanced concepts of React for building complex applications.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Puedes agregar más objetos de entrenamiento aquí
  ];

  return (
    <div className="min-h-screen  text-center">
      <h1 className="text-yellow-400 text-3xl font-bold py-8 mt-10">Entrenos</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {trainings.map((training, index) => (
          <TrainingCard
            key={index}
            title={training.title}
            description={training.description}
            imageUrl={training.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Entrenamiento;
