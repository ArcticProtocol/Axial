import React, { useState } from "react";
import ProjectView from "../Components/Project/ProejctView";
import CarbonCalculator from "../Components/Carbon/Calculator";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";
import ProjectProposalView from "../Components/Project/ProjectProposalView";
const projects = [
  {
    id: 1,
    image: "project1.jpg",
    year: 2022,
    country: "USA",
    city: "New York",
    type: "Clean Energy",
  },
  {
    id: 2,
    image: "project2.jpg",
    year: 2023,
    country: "Canada",
    city: "Toronto",
    type: "Ocean",
  },
  {
    id: 3,
    image: "project2.jpg",
    year: 2023,
    country: "Canada",
    city: "Toronto",
    type: "Ocean",
  },

  {
    id: 4,
    image: "project2.jpg",
    year: 2023,
    country: "Canada",
    city: "Toronto",
    type: "Ocean",
  },
  // Add more projects as needed
];

function OffsetView() {
  return (
    <div className="bg-gray-50 p-12">
      <section>
        <div className="w-full h-1/2 rounded-xl bg-white shadow-lg p-14">
          <div className="flex h-full">
            {/* Left Section */}
            <div className="w-1=3/4 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">Offset Activity</h1>
              <h2 className="text-5xl font-bold mb-8">tCO2 Offsets</h2>
              <LineGraph />
              {/* Horizontal Line Graph */}
              {/* Insert your line graph component here */}
            </div>

            {/* Right Section */}
            <div className="w-1/4 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">tCO2</h2>
              <h2 className="text-3xl font-bold mb-4">History</h2>
              <PieChartExample />
              {/* Insert your pie chart component here */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <ProjectsBanner />

        <ProjectTabLView />
      </section>
    </div>
  );
}

const ProjectTabLView = () => {
  const [selectedTab, setSelectedTab] = useState<string>("projects");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <div className="flex">
        <div
          className={`px-24 py-2 cursor-pointer  rounded-2xl ${
            selectedTab === "projects"
              ? "bg-green-950 text-white flex-grow"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </div>
        <div className="w-px bg-green-800 mx-4"></div>
        <div
          className={`px-24 py-2 cursor-pointer rounded-2xl ${
            selectedTab === "proposals"
              ? "bg-green-950 text-white flex-grow"
              : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("proposals")}
        >
          Proposals
        </div>
      </div>
      <div className="w-full bg-green-800 h-px my-4"></div>
      {selectedTab === "projects" && <ProjectListView />}
      {selectedTab === "proposals" && <ProjectProposalList />}
    </div>
  );
};

const LineGraph = () => {
  const data = [
    { month: "Jan", offset: 20 },
    { month: "Feb", offset: 35 },
    { month: "Mar", offset: 50 },
    { month: "Apr", offset: 40 },
    { month: "May", offset: 65 },
    { month: "Jun", offset: 80 },
    { month: "Jul", offset: 60 },
    { month: "Aug", offset: 75 },
    { month: "Sep", offset: 55 },
    { month: "Oct", offset: 70 },
    { month: "Nov", offset: 90 },
    { month: "Dec", offset: 85 },
  ];

  return (
    <div style={{ width: "70%" }}>
      <LineChart width={1400} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="offset"
          stroke="#00C853"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

const PieChartExample = () => {
  const data = [
    { name: "ocean", value: 30 },
    { name: "nature", value: 50 },
    { name: "plastic", value: 20 },
  ];

  const COLORS = ["#00C853", "#2196F3", "#989898"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        opacity={0.8}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
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

const ProjectProposalList = () => {
  const projectProposals = [
    {
      id: 1,
      image: "path/to/image1.jpg",
      year: 2023,
      country: "USA",
      city: "New York",
      fundingRequired: "500Matic",
      impact: 100,
      type: "Clean Energy",
    },

    {
      id: 2,
      image: "path/to/image1.jpg",
      year: 2023,
      country: "USA",
      city: "New York",
      fundingRequired: "500Matic",
      impact: 100,
      type: "Clean Energy",
    },

    {
      id: 3,
      image: "path/to/image1.jpg",
      year: 2023,
      country: "USA",
      city: "New York",
      fundingRequired: "500Matic",
      impact: 100,
      type: "Clean Energy",
    },
    // Add more project proposals...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projectProposals.map((proposal) => (
        <ProjectProposalView key={proposal.id} data={proposal} />
      ))}
    </div>
  );
};

function ProjectListView() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectView key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default OffsetView;
