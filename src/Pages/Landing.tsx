import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Section 1: Full-width background image */}
      <section className="relative h-screen">
        <div className="bg-landing h-full w-full bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col">
          <h1 className="text-5xl font-bold text-white">
            The all in one platform
          </h1>
          <h2 className="text-8xl font-bold text-white">
            for all your Carbon Needs
          </h2>
        </div>
      </section>

      {/* Section 2: Mission statement */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            {/* Placeholder mission statement */}
            We are committed to tackling climate change and working towards a
            sustainable future for all.
          </p>
        </div>
      </section>

      {/* Section 3: 3x3 Grid */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold mb-8">Key Points</h2>
          <div className="grid grid-cols-3 gap-10">
            {/* Repeat the above block for each point */}

            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
          </div>
        </div>
      </section>

      {/* Section 4: Progress timeline */}
      <section className="bg-green-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Development Progress
          </h2>

          <Timeline/>
          {/* <div className="flex space-x-4">

            <div className="flex-none w-1/4">
              <div className="bg-white p-4">
                <h3 className="text-lg font-bold mb-2">Q1 2023</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

const GridTile: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl">
      <span className="text-3xl mb-4">Icon 1</span>
      <h3 className="text-xl font-bold mb-2">Title 1</h3>
      <p className="text-lg">
        {/* Placeholder content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const ProgressTile: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl">
      <span className="text-3xl mb-4">Icon 1</span>
      <h3 className="text-xl font-bold mb-2">Title 1</h3>
      <p className="text-lg">
        {/* Placeholder content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineData = [
    {
      quarter: "Q1 2023",
      heading: "Quarter 1",
      description: "Description for Quarter 1",
    },
    {
      quarter: "Q2 2023",
      heading: "Quarter 2",
      description: "Description for Quarter 2",
    },
    {
      quarter: "Q3 2023",
      heading: "Quarter 3",
      description: "Description for Quarter 3",
    },
    {
      quarter: "Q4 2023",
      heading: "Quarter 4",
      description: "Description for Quarter 4",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {timelineData.map((item) => (
          <div
            key={item.quarter}
            className="rounded-md  bg-white p-4 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-lg font-bold mb-2">{item.quarter}</h3>
            <h4 className="text-xl font-bold mb-2">{item.heading}</h4>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



