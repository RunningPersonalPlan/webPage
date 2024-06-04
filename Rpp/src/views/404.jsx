import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = 'https://jcofaith.org/';
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg mb-8">Sorry, the page you are looking for does not exist. You will be redirected to the homepage in 5 seconds.</p>
      </div>
    </div>
  );
};

export default NotFound;