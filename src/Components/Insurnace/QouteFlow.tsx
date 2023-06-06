import React from 'react';

const InsuranceQuote = () => {
  const premiumAmount = 500;
  const amountCovered = 100000;

  const handleBuyNow = () => {
    // Handle buy now logic
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Insurance Policy Details</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Premium Amount</h2>
              <p className="text-lg text-gray-700 mb-4">${premiumAmount}</p>
              <h2 className="text-xl font-bold mb-4">Amount Covered</h2>
              <p className="text-lg text-gray-700 mb-4">${amountCovered}</p>
              <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus mauris ut dui aliquam, sed
                elementum ipsum dapibus.
              </p>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceQuote;
