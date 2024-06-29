import logo from "../assets/RPPBLACK.jpg"

const LoadingSpinner = () => {
  return (
    // <div className="flex justify-center items-center h-full mt-60">
    //   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    // </div>
    <div className="flex flex-col justify-center items-center h-full mt-60">
      <img src={logo} alt="Logo" className="h-20 w-auto mb-4" />
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;