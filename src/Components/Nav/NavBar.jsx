import React, { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import {VscChromeClose} from 'react-icons/vsc'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      <div className="shadow-xl">
        <div className="flex justify-between items-center py-5 px-6  lg:p-6 lg:px-16 z-50">
          <div className="flex items-center">
            <h1 className="text-[#2e46b2] bg-[#2e46b2] px-4 py-1 lg:px-6 lg:py-2 text-white font-semibold text-xl lg:text-2xl rounded-full">
              Incubyte
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul className="space-x-4 text-[#8191d6] text-sm lg:text-xl cursor-pointer flex">
              <li className="hover:bg-[#2e46b2] hover:text-white duration-300 ease-in hover:px-2 hover:py-1 transition-all">
                About Us
              </li>
              <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-out">
                Our Expertise
              </li>
              <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
                Success Stories
              </li>
              <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              className="text-[#8191d6] text-xl focus:outline-none transition-all"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <VscChromeClose
                  className="h-6 w-6 transition-all"
                  fill="#8191d6"
                  stroke="#8191d6"
                />
              ) : (
                <RiMenu3Line
                  className="h-6 w-6 transition-all"
                  fill="#8191d6"
                  stroke="#8191d6"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`px-6 py-2 gap-2 space-x-4 text-[#8191d6] text-lg lg:text-xl cursor-pointer lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col lg:flex-row gap-2 justify-end">
          <li className="hover:bg-[#2e46b2] hover:text-white duration-300 ease-in hover:px-2 hover:py-1 transition-all">
            About Us
          </li>
          <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-out">
            Our Expertise
          </li>
          <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
            Success Stories
          </li>
          <li className="hover:bg-[#2e46b2] hover:text-white hover:px-2 hover:py-1 transition-all duration-300 ease-in-out">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
