import React, { useContext, useEffect, useState } from "react";
import BannerCard from "../Components/Dashboard/Banner";
import DashboardProjects from "./DashboardProjects";
import InsuranceProduct from "../Components/Insurnace/InsurnaceProduct";
import InsuranceQuote from "../Components/Insurnace/QouteFlow";
import { Project, getUserProjects } from "../Repostitory/Repository";
import UserAppContext, { UserAppCtx } from "../Context/usermtecontext";

const Dashboard: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<string>("Project");
  const [currentIndex, setcurrentIndex] = useState<number>(0);

  const menuItems = [
    { id: 1, title: "Project", icon: "Manage" },
    { id: 2, title: "Insurance", icon: "Get" },
  ];

  const [userProjects, setUserProjects] = useState<Project[]>();
  const { userMeta } = useContext<UserAppCtx>(UserAppContext)!;

  useEffect(() => {
    const call = async () => {
      let response = await getUserProjects(userMeta.pubcliKey);
      setUserProjects(response);
    };

    call();
  }, []);

  const pages = [
    <DashboardProjects projects={userProjects!} />,
    <InsuranceProduct />,
    <InsuranceQuote />,
  ];

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
