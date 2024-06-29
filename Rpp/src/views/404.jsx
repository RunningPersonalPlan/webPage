import { useNavigate } from 'react-router-dom';
import logo from "../assets/RPPBLACK.jpg"
import { useEffect } from 'react';

const NotFound = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
      
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
        <div className=" flex justify-center items-center bg-transparent mt-10">
          <div className="max-w-md mx-auto p-4 bg-transparent rounded shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-yellow-400 ">404 Not Found</h1>
            <p className="text-lg mb-0 text-white ">Sorry, the page you are looking for does not exist. You will be redirected to the homepage in 10 seconds.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-6">
          <img src={logo} alt="Logo" className="h-20 w-auto mb-4" />
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
    </>
    
  );
};

export default NotFound;