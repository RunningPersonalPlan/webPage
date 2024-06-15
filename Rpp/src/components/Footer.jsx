import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent mt-8 h-13">
      <div className="mx-auto flex items-center justify-center flex-wrap py-0">
        {/* Enlaces de redes sociales */}
        <a href="https://www.instagram.com/runningpersonalplan/" className="mx-2">
          <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
        </a>
        {/* <a href="" className="mx-2">
          <img src="../assets/strava.png" alt="Strava" className="w-6 h-6" />
        </a> */}
        <a href="https://wa.me/573107686892" className="mx-2">
          <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="WhatsApp" className="w-6 h-6" />
        </a>
        {/* Añade más enlaces o imágenes según necesites */}
      </div>
      <div className="text-center text-gray-400 bg-transparent py-2">
        &copy; 2024 RPP. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
