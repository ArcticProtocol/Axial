import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { getIntegerByCreditTypeString } from "../../util";

import {ethers} from "ethers";

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const [creditType, setCreditType] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  /// ThirdWeb
  const { contract } = useContract(
    "0x8C2B671c470309f85bd5DD13C885820E3FAfE2bB"
  );
  const { mutateAsync: buyCreditTokens, isLoading } = useContractWrite(
    contract,
    "buyCreditTokens"
  );

  const call = async () => {
    try {
      const data = await buyCreditTokens({
        args: [
          getIntegerByCreditTypeString(creditType),
          ethers.utils.parseEther(searchParams.get("price")!),
        ],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCreditType(event.target.value);
  };

  const handleContinueShopping = () => {
    call();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Confirm Purcahse</h2>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for making Earth a better place
        </p>

        {/* Display order details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Order Details:</h3>
          <div>
            <label htmlFor="dropdown">Select an option:</label>
            <select
              id="dropdown"
              value={creditType}
              onChange={handleSelectionChange}
            >
              <option value="">Select</option>
              <option value="Ocean">Ocean</option>
              <option value="Nature">Nature</option>
              <option value="Plastic">Plastic</option>
            </select>
          </div>
        </div>

        {/* Display payment details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Payment Information:</h3>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">
              {searchParams.get("price")}
            </h1>
          </div>
          {/* Display payment details such as payment method, total amount, etc. */}
        </div>

        {/* Display shipping details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Impact</h3>
          <h1 className="text-lg font-semibold">{searchParams.get("label")}</h1>
        </div>

        {/* Continue Shopping button */}
        <button
          className="bg-green-900 hover:bg-green-800 text-white rounded-lg px-4 py-2 w-full"
          onClick={handleContinueShopping}
          disabled={isLoading || creditType.length < 2}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
