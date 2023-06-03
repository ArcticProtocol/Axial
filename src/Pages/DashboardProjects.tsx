import React from "react";

const DashboardProjects: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <section className="w-5/6 h-3/4 flex justify-center items-center ">
        <div className="bg-bg-project-banner bg-cover bg-center bg-opacity-40 w-4/5 h-2/3 flex flex-col justify-center items-center rounded-xl">
          <h1 className="text-4xl font-bold text-white">
            Bring your carbon projects on-chain
          </h1>
          <h1 className="text-6xl font-bold text-white">
            Get funded to increase your green efforts
          </h1>
        </div>
      </section>

      <section className="w-4/5 flex justify-center items-center mt-4">
        <button
          onClick={() => {}}
          className="bg-gradient-to-r from-green-950 to-green-300 py-6 px-16 rounded-full"
        >
          <h2 className="text-white text-xl font-bold">Apply Now</h2>
        </button>
      </section>
    </div>
  );
};

export default DashboardProjects;