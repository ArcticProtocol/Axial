import React from "react";
import { CarbonOffset } from "../../Repostitory/Repository";
import { Link } from "react-router-dom";

interface RegistryListViewProps {
  data: CarbonOffset[]; // Replace with your data type
}

const RegistryListView: React.FC<RegistryListViewProps> = ({ data }) => {
  return (
    <div className="flex flex-col flex-wrap w-full">
      {data.map((e) => (
        <HorizontalListTile key={e.txHash} offset={e} />
      ))}
    </div>
  );
};

interface HorizontalListTileProps {
  offset: CarbonOffset;
}

const HorizontalListTile: React.FC<HorizontalListTileProps> = ({ offset }) => {
  return (
    <div className="justify-between flex bg-white shadow-md rounded-md p-8 m-2 py-6">
      <h2 className="text-lg font-semibold mb-2">
        Credit : {offset.creditType}
      </h2>

      <div>
        <Link to={`https://mumbai.polygonscan.com/tx/${offset.txHash}`}>
          <span className="inline-block  text-purple-600 text-lg px-2 py-1 rounded  hover:text-purple-900">
            {offset.txHash}
          </span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-500 text-black text-lg rounded opacity-0 pointer-events-none transition-opacity duration-300">
            View on Polygonscan
          </div>
        </Link>
      </div>
      <p className="text-black text-lg mb-2">
        Offset: {offset.offsetAmount} tCO2
      </p>
      <p className="text-gray-500 text-lg"> {offset.timestamp}</p>
    </div>
  );
};

export default RegistryListView;
