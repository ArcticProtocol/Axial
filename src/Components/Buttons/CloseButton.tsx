import React from 'react';

const CloseButton = ({ onClick } : any) => {
  return (
    <button
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 fill-curren rounded-xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 10.586L6.707 5.293A1 1 0 1 0 5.293 6.707L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 1 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z" />
      </svg>
    </button>
  );
};

export default CloseButton;