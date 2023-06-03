import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const menuItems = ["Home", "Offset", "Dashboard", "Swap"];
  const routes = ["/", "/offset", "/dashboard", "/swap"];

  return (
    <header className="bg-opacity-50 bg-blur flex justify-between items-center px-8 py-4">
      <Link to="/">
        <div className="flex flex-row items-baseline">
          <h1 className="text-black text-2xl px-2">Axial </h1>
          <h3> by Arctic Protocol</h3>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-4 flex-grow">
          {menuItems.map((item, index) => (
            <Link
              to={routes[index]}
              key={item}
              className="px-0 text-black  text-bold hover:text-green-700 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
