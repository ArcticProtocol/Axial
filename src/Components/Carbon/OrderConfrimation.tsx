import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
    const navigate = useNavigate();

  const handleContinueShopping = () => {
    // Redirect to the homepage or desired page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <p className="text-lg text-gray-600 mb-4">Thank you for your purchase!</p>

        {/* Display order details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Order Details:</h3>
          {/* Display order details such as product, quantity, price, etc. */}
        </div>

        {/* Display payment details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Payment Information:</h3>
          {/* Display payment details such as payment method, total amount, etc. */}
        </div>

        {/* Display shipping details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Shipping Address:</h3>
          {/* Display shipping address details */}
        </div>

        {/* Display additional information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Additional Information:</h3>
          {/* Display any additional information or instructions */}
        </div>

        {/* Order confirmation message */}
        <p className="text-lg text-green-500 mb-4">Your order has been successfully placed!</p>

        {/* Continue Shopping button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
