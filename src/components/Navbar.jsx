import React, { useState } from "react";
import { logo, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <a href="/#home">
          <img src={logo} className="h-[70px]" alt="לוגו" />
        </a>
        <div className="hidden md:flex items-center">
          <div className="flex gap-6">
            <a
              href="/#home"
              className="text-gray-800 hover:text-[#F4842F] transition-colors duration-300 transform hover:scale-105 relative group"
            >
              <span className="relative">
                דף הבית
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#F4842F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
              </span>
            </a>
            <a
              href="/#products"
              className="text-gray-800 hover:text-[#F4842F] transition-colors duration-300 transform hover:scale-105 relative group"
            >
              <span className="relative">
                מוצרי טיפוח
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#F4842F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
              </span>
            </a>
            <a
              href="/#reviews"
              className="text-gray-800 hover:text-[#F4842F] transition-colors duration-300 transform hover:scale-105 relative group"
            >
              <span className="relative">
                חוות דעת
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#F4842F] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-right"></span>
              </span>
            </a>
          </div>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-4">
          <a
            href="/#home"
            className="p-4 hover:bg-gray-100 hover:text-[#F4842F] transition-all duration-300"
          >
            דף הבית
          </a>
          <a
            href="/#reviews"
            className="p-4 hover:bg-gray-100 hover:text-[#F4842F] transition-all duration-300"
          >
            ביקורות
          </a>
          <a
            href="/#products"
            className="p-4 hover:bg-gray-100 hover:text-[#F4842F] transition-all duration-300"
          >
            מוצרים
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
