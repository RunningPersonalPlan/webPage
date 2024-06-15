import React from 'react';
import BlogComponent from '../components/BlogComponent.jsx';

const activities = [
  {
    activity: 'Fútbol',
    title: 'Gran victoria del equipo local en el torneo',
    image: 'https://via.placeholder.com/300',
    description: 'El equipo local logró una impresionante victoria en el torneo regional, destacando con un marcador de 3-1 contra su mayor rival. El partido estuvo lleno de emoción y momentos destacados...',
  },
  {
    activity: 'Baloncesto',
    title: 'Partido emocionante en la liga de baloncesto',
    image: 'https://via.placeholder.com/300',
    description: 'El partido de baloncesto fue un espectáculo, con ambos equipos dando lo mejor de sí. El marcador final fue 95-93, un juego muy reñido...',
  },
  {
    activity: 'Tenis',
    title: 'Torneo de tenis atrae a grandes talentos',
    image: 'https://via.placeholder.com/300',
    description: 'El torneo de tenis de este año ha atraído a jugadores de alto nivel. Las semifinales fueron intensas, y el público disfrutó cada momento...',
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-wrap justify-center">
        {activities.map((activity, index) => (
          <BlogComponent
            key={index}
            activity={activity.activity}
            title={activity.title}
            image={activity.image}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

