import React from "react";

type ProjectListTileParams = {
  coverImage: string;
  title: string;
  balance: string;
  creditType: string;
  onClick: () => void;
};

const ProjectListTile: React.FC<ProjectListTileParams> = ({
  coverImage,
  title,
  balance,
  creditType,
  onClick,
}) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-8 m-6">
      <img
        className="w-32 h-32 rounded-md mr-4"
        src={coverImage}
        alt="Project Cover"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500">Year: {balance}</p>
      </div>
      <p className="text-black text-lg font-mono font-semibold mr-20">Credit Type: {creditType}</p>

      <button
        className="bg-green-500 rounded-md text-white px-8 py-4"
        onClick={onClick}
      >
        Manage
      </button>
    </div>
  );
};

export default ProjectListTile;
