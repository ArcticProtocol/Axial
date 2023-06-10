import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const BuyCarbonCredits = () => {
  const options = [
    { label: "5 tCO2", price: "$MATIC 1.5", value: 0.5, tokens: 5 },
    { label: "10 tCO2", price: "$MATIC 12 3% off", value: 10, tokens: 12 },
    { label: "15 tCO2", price: "$MATIC  20 11% off", value: 15, tokens: 20 },
  ];

  const navigation = useNavigate();

  const handleBuyNow = (option: any) => {
    // Handle buy now logic for the selected option
    console.log("Buy now:", option);

    navigation({
      pathname: "/confirmOrder",
      search: createSearchParams({
        price: option.value,
        label: option.tokens,
      }).toString(),
    });
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col w-2/5">
        <h1 className="text-3xl font-bold mb-2">Take Climate action now!</h1>
        <h1 className="text-xl mb-8">
          Buying carbon credits is a simple and effective way to make a positive
          impact on the environment. By purchasing carbon credits, you can
          offset your carbon emissions and support projects that help reduce
          greenhouse gas emissions.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg m-4 p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-4">{option.label}</h2>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-bold">{option.price}</span>
            </p>
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
              onClick={() => handleBuyNow(option)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCarbonCredits;
