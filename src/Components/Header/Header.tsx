import { ConnectWallet } from "@thirdweb-dev/react";
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
        <ul className="flex space-x-4 flex-grow items-center">
          {menuItems.map((item, index) => (
            <Link
              to={routes[index]}
              key={item}
              className="px-0 text-black  text-bold hover:text-green-700 cursor-pointer"
            >
              {item}
            </Link>
          ))}
          <ConnectWallet
            theme="dark"
            btnTitle="Get Started"
            style={{ height: 45 }}
            auth={{
              loginOptional: false,
            }}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
