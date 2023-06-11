import React, { Dispatch, useContext, useState } from "react";
import WidgetLoader from "../Loader/WidgetLoader";
import { registerOffser } from "../../Repostitory/Repository";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { etherToWei, getIntegerByCreditTypeString, weiToEther } from "../../util";
import UserAppContext from "../../Context/usermtecontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CloseButton from "../Buttons/CloseButton";

type ConfirmOffset = {
  maxBalance: number;
  creditType: string;
  closeModal: Dispatch<React.SetStateAction<boolean>>;
};

const ConfirmOffsetModal = ({
  maxBalance,
  creditType,
  closeModal,
}: ConfirmOffset) => {
  const [offsetValue, setOffsetValue] = useState(0);
  const navigate = useNavigate();
  const { contract } = useContract(
    "0x8C2B671c470309f85bd5DD13C885820E3FAfE2bB"
  );
  const { mutateAsync: offsetTokens, isLoading } = useContractWrite(
    contract,
    "offsetTokens"
  );

  const { userMeta } = useContext(UserAppContext);

  const offset = async (): Promise<string | null> => {
    try {
      const offsetWei = etherToWei(offsetValue.toString());
      console.log({offsetWei});
      const data = await offsetTokens({
        args: [offsetValue, getIntegerByCreditTypeString(creditType)],
      });

      console.info("contract call successs", data);
      return data.receipt.transactionHash;
    } catch (err) {
      console.error("contract call failure", err);
      return null;
    }
  };
  const handleIncrement = () => {
    setOffsetValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setOffsetValue((prevValue) => prevValue - 1);
  };

  const handleMaxBalance = () => {
    setOffsetValue(maxBalance);
  };

  const handleConfirmOffset = async () => {
    const result = await offset();

    if (result) {
      const offsetDetails = {
        userName: userMeta.name,
        offsetAmount: offsetValue,
        creditType: creditType,
        txHash: result,
        owner: userMeta.pubcliKey,
      };

      console.log({ result });

      const dbResult = await registerOffser(offsetDetails);
      console.log({ dbResult });

      if (dbResult) {
        closeModal(false);
        navigate("/offset");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md">
          <div className="flex flex-row justify-between items-start">
            <h1 className="text-2xl font-bold mb-4">Confirm Offset</h1>
            <CloseButton onClick={() => closeModal(false)} />
          </div>
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
            {isLoading && <WidgetLoader />}

            {!isLoading && <div> Confim </div>}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ConfirmOffsetModal;
