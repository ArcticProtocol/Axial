import React, { useState } from "react";
import BannerCard from "../Components/Dashboard/Banner";
import DashboardProjects from "./DashboardProjects";

const Dashboard: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<string>("Project");
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const menuItems = [
    { id: 1, title: "Project", icon: "icon1" },
    { id: 2, title: "Insurance", icon: "icon2" },
  ];

  const pages = [<DashboardProjects />];

  const handleTileClick = (title: string, index: number) => {
    setSelectedTile(title);
    setcurrentIndex(index);
  };

  return (
    <div className="flex h-screen bg-grey">
      <div className="bg-green-950 text-white w-26 flex flex-row">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`${
                item.title === selectedTile ? "bg-green-800" : ""
              }  p-6 cursor-pointer`}
              onClick={() => handleTileClick(item.title, index)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="block text-m text-white">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">{pages[currentIndex]}</div>
    </div>
  );
};

export default Dashboard;
