import React, { Dispatch, useState } from "react";

interface WithdrawModalProps {
  onClose: Dispatch<React.SetStateAction<boolean>>;
  onConfirmWithdraw: (amount: number, reason: string) => void;
  maxAmount: number;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  onClose,
  onConfirmWithdraw,
  maxAmount,
}) => {
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState("");

  const handleConfirmWithdraw = () => {
    onConfirmWithdraw(amount, reason);

    setAmount(0);
    setReason("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Enter Withdraw Amount</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => onClose(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <label className="block mb-2">
            Amount:
            <input
              type="number"
              className="border border-gray-300 px-2 py-1 w-full"
              value={amount}
              max={maxAmount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <p className="text-sm text-gray-500 mb-2">{`Max Amount: ${maxAmount}`}</p>
          <label className="block mb-2">
            Reason:
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 w-full"
              value={reason}
              required
              onChange={(e) => setReason(e.target.value)}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 w-full rounded"
          onClick={handleConfirmWithdraw}
        >
          Confirm Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawModal;
