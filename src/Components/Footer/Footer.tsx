import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4 flex flex-row md:flex-row justify-between">
        <div className="text-white">
          <p>&copy; 2023 Arctic Protocol</p>
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Discord
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Twitter
            </a>
          </li>

          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
