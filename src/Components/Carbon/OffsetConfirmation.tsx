import React, { Dispatch, useState } from "react";
import Loader from "../Loader/Loader";
import WidgetLoader from "../Loader/WidgetLoader";

type ConfirmOffset = {
  maxBalance: number;
  creditType: string;
  closeModal : Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmOffsetModal = ({maxBalance, creditType, closeModal} : ConfirmOffset) => {
  const [offsetValue, setOffsetValue] = useState(0);

  const handleIncrement = () => {
    setOffsetValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setOffsetValue((prevValue) => prevValue - 1);
  };

  const handleMaxBalance = () => {
    setOffsetValue(maxBalance);
  };

  const handleConfirmOffset = () => {
    closeModal(false);
    // Logic to handle confirming the offset
    // Add your implementation here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Confirm Offset</h1>
        <div className="flex items-center mb-4">
          <button
            className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-3 py-1 text-center w-24"
            value={offsetValue}
            onChange={(e) => setOffsetValue(Number(e.target.value))}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded-lg ml-2"
            onClick={handleIncrement}
          >
            +
          </button>
          <button className="text-green-500 ml-4" onClick={handleMaxBalance}>
            MAX
          </button>
        </div>
        <p className="text-gray-500 mb-4">
          Your total impact from this offset is {offsetValue} tCO2
        </p>
        <button
          className="bg-green-500 text-white rounded-lg py-2 w-full"
          onClick={handleConfirmOffset}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmOffsetModal;
