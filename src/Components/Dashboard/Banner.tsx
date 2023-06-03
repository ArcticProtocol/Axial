import React from "react";

const BannerCard: React.FC = () => {
  return (
    <section className=" flex justify-center items-start h-screen">
      <div className=" ">
        <div className=" h-2/4 w-3/4 bg-bg-project-banner bg-cover bg-center rounded-2xl">
          <div className="  flex items-center justify-center bg-black bg-opacity-60 rounded-2xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                Bring your sustainbale project onchain{" "}
              </h1>
              <br />
              <h2 className="text-6xl font-bold text-white">
                Get funded to increase your green efforts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
