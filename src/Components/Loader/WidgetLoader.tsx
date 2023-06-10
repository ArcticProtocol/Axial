import React from 'react';

const WidgetLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full border-b-4 border-white h-6 w-6"></div>
    </div>
  );
};

export default WidgetLoader;
