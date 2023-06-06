import React from "react";

const InsuranceProduct = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/path/to/product-image.jpg"
              alt="Insurance Product"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">Insurance Product Title</h1>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              maximus mauris ut dui aliquam, sed elementum ipsum dapibus.
            </p>
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full mr-2">
                New
              </span>
              <span className="bg-gray-500 text-white px-4 py-2 rounded-full">
                Featured
              </span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12" y2="16" />
              </svg>
              <span className="text-gray-700">4.5 (123 reviews)</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12H4" />
                <path d="M20 6H4" />
                <path d="M20 18H4" />
              </svg>
              <span className="text-gray-700">Available for all ages</span>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceProduct;
