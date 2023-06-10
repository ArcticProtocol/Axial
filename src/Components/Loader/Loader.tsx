import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-4 border-green-500"></div>
    </div>
  );
};

export default Loader;
