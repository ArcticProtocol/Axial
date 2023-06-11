import { useContext, useState } from "react";
import BuyCarbonCredits from "../Components/Carbon/BuyOffsets";
import MonthlyOffsetChart from "../Components/Charts/MonthlyOffsetChart";
import OffsetTypePie from "../Components/Charts/OffsetTypePie";
import ProjectTabView from "../Components/Project/TabView";
import UserAppContext, { UserAppCtx } from "../Context/usermtecontext";
import { useBalance, useContract, useContractRead } from "@thirdweb-dev/react";
import { weiToEther } from "../util";
import ConfirmOffsetModal from "../Components/Carbon/OffsetConfirmation";

function OffsetView() {
  const { userMeta } = useContext<UserAppCtx>(UserAppContext)!;

  const userOffsetContract = useContract(
    "0x8C2B671c470309f85bd5DD13C885820E3FAfE2bB"
  );
  const totalUserOffsets = useContractRead(
    userOffsetContract.contract,
    "getUserOffsets",
    [userMeta.pubcliKey]
  );

  return (
    <div className="bg-gray-50 p-12">
      <section>
        <div className="w-full h-1/2 rounded-xl bg-white shadow-lg p-14">
          <h1 className="text-xl font-bold mb-4"> Hello {userMeta.name} 👋🏻</h1>
          <div className="flex h-full">
            <div className="w-1=3/4 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">Offset Activity</h1>
              <h2 className="text-5xl font-bold mb-8">tCO2 Offsets</h2>
              <MonthlyOffsetChart />
            </div>

            <div className="w-1/4 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">tCO2</h2>
              <h2 className="text-3xl font-bold mb-4">History</h2>

              <>
                {totalUserOffsets.data && (
                  <OffsetTypePie totalUserOffsets={totalUserOffsets.data} />
                )}
              </>
            </div>
          </div>

          <BuyCarbonCredits />

          <InitiateOffset />
        </div>
      </section>

      <section>
        <ProjectsBanner />

        <ProjectTabView />
      </section>
    </div>
  );
}

const InitiateOffset: React.FC = () => {
  const { userMeta } = useContext<UserAppCtx>(UserAppContext)!;
  const [showConfrimOffset, setConfirmOffset] = useState<boolean>(false);

  const [currentOffset, setCurrentOffset] = useState({
    creditType: "Ocean",
    maxBalance: 0,
  });

  const oceanToken = useBalance("0xD10Fa568841E5e5B214A7cF91C2BC0DBafDdD29D");
  const cleanToken = useBalance("0x9f72Edc0F99066d14b7AcB752d7144F4A5cCdf1D");
  const plasticToken = useBalance("0xD7c19583873A992d8fC276725a896358fcD714F3");

  return (
    <div className="w-full bg-white shadow-md mt-10">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-xl font-semibold">Carbon Credit Balance</h1>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-around ">
        <Card
          onTap={() => {
            setCurrentOffset({
              creditType: "Ocean",
              maxBalance: parseFloat(weiToEther(oceanToken.data!.value)),
            });

            setConfirmOffset(true);
          }}
          title={`Ocean AOT : ${
            !oceanToken.isLoading && weiToEther(oceanToken.data!.value)
          }`}
          buttonText="Offset Now"
        />
        <Card
          onTap={() => {
            setCurrentOffset({
              creditType: "Clean",
              maxBalance: parseFloat(weiToEther(cleanToken.data!.value)),
            });
            setConfirmOffset(true);
          }}
          title={`Clean Energy ACT : ${
            !cleanToken.isLoading && weiToEther(cleanToken.data!.value)
          }`}
          buttonText="Offset Now"
        />

        <Card
          onTap={() => {
            setCurrentOffset({
              creditType: "Plastic",
              maxBalance: parseFloat(weiToEther(plasticToken.data!.value)),
            });
            setConfirmOffset(true);
          }}
          title={`Plastic Waste APT: ${
            !plasticToken.isLoading && weiToEther(plasticToken.data!.value)
          }`}
          buttonText="Offset Now"
        />
      </div>
      {showConfrimOffset && (
        <ConfirmOffsetModal
          creditType={currentOffset.creditType}
          maxBalance={currentOffset.maxBalance}
          closeModal={setConfirmOffset}
        />
      )}
    </div>
  );
};

interface CardProps {
  title: string;
  buttonText: string;
  onTap: () => void;
}

const Card: React.FC<CardProps> = ({ title, buttonText, onTap }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-grow mx-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <button
        className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full"
        onClick={onTap}
      >
        {buttonText}
      </button>
    </div>
  );
};

function ProjectsBanner() {
  return (
    <div className="w-6/10 h-3/5 flex items-center justify-center mx-10 my-14">
      <div className=" bg-cover bg-solar-city py-32 flex-1 rounded-3xl">
        <div className="flex items-center justify-center text-white text-7xl font-bold">
          Discover Impactful Projects
        </div>
      </div>
    </div>
  );
}

export default OffsetView;
