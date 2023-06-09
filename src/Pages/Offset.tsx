import { useContext } from "react";
import BuyCarbonCredits from "../Components/Carbon/BuyOffsets";
import MonthlyOffsetChart from "../Components/Charts/MonthlyOffsetChart";
import OffsetTypePie from "../Components/Charts/OffsetTypePie";
import ProjectTabView from "../Components/Project/TabView";
import UserAppContext, { UserAppCtx } from "../Context/usermtecontext";

function OffsetView() {
  const { userMeta } = useContext<UserAppCtx>(UserAppContext)!;

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
              <OffsetTypePie />
            </div>
          </div>

          <BuyCarbonCredits />

          <Bar />
        </div>
      </section>

      <section>
        <ProjectsBanner />

        <ProjectTabView />
      </section>
    </div>
  );
}

const Bar: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-md mt-10">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-xl font-semibold">Balances</h1>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-around ">
        <Card title="Ocean AOT : " buttonText="Offset Now" />
        <Card title="Clean Energy ACT : " buttonText="Offset Now" />
        <Card title="Plastic Waste APT: " buttonText="Offset Now" />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, buttonText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-grow mx-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <button className="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full">
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
