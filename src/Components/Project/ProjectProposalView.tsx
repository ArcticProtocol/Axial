import React from "react";

const ProjectProposalView = ({ data }: any) => {
  const { image, year, country, city, fundingRequired, impact, type } = data;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="h-48">
        <img
          src={image}
          alt="Project Image"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between h-36 p-2">
        <div className="text-lg font-bold">{year}</div>
        <div className="text-sm text-gray-500">{`${country}, ${city}`}</div>
        <div className="text-sm">{`Funding Required: $${fundingRequired}`}</div>
        <div className="text-sm">{`Impact: ${impact} tCO2`}</div>
        <div className="text-sm">{`Type: ${type}`}</div>

        <button className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600">
          Vote now
        </button>
      </div>
    </div>
  );
};

export default ProjectProposalView;
