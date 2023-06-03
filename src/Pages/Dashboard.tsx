import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<string>("");

  const menuItems = [
    { id: 1, title: "Item 1", icon: "icon1" },
    { id: 2, title: "Item 2", icon: "icon2" },
  
  ];

  const handleTileClick = (title: string) => {
    setSelectedTile(title);
  };

  return (
    <div className="flex h-screen bg-grey">
      <div className="bg-green-950 text-white w-26 flex flex-row">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${
                item.title === selectedTile ? "bg-white opacity-70" : ""
              }  p-6 cursor-pointer`}
              onClick={() => handleTileClick(item.title)}
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`${
                  item.title === selectedTile ? "block text-m text-black" : "block text-m text-white"
                }`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-gray-100">
        {/* Content of the selected tile */}
      </div>
    </div>
  );
};

export default Dashboard;
