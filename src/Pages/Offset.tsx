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
        </div>
      </section>

      <section>
        <ProjectsBanner />

        <ProjectTabView />
      </section>
    </div>
  );
}

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
