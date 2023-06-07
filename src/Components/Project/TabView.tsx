import { useState } from "react";
import ProjectView from "./ProejctView";

const ProjectTabView = () => {
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
      {selectedTab === "proposals" && <ProjectListView />}
    </div>
  );
};

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


export default ProjectTabView;