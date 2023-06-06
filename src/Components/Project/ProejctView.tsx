import React from "react";

interface Project {
  id: number;
  image: string;
  year: number;
  country: string;
  city: string;
  type: string;
}

interface ProjectViewProps {
  project: Project;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="w-full h-48">
        <img
          src={project.image}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{project.year}</h2>
        <p className="text-gray-500 mb-2">
          {project.country}, {project.city}
        </p>
        <p className="text-gray-500 mb-8">{project.type}</p>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-green-950 hover:bg-green-800 text-white font-bold  py-2 px-16 rounded-xl self-center">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
