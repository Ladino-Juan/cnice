import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t py-12">
      <div className="md:max-w-[1280px] m-auto flex flex-col md:flex-row justify-between items-center max-w-[600px] px-4 md:px-6">
        {/* Logo and Contact */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <a href="/#home">
            <img src={logo} className="h-[60px]" alt="לוגו" />
          </a>
          <div className="mt-4 text-center md:text-right space-y-1">
            <p className="text-gray-600">ירושלים, ישראל</p>
            <a
              href="tel:+9720587221123"
              className="block text-[#F4842F] hover:text-[#e67a2b] transition-colors duration-200"
            >
              058-7221123
            </a>
            <a
              href="mailto:Neomi7266@gmail.com"
              className="block text-[#F4842F] hover:text-[#e67a2b] transition-colors duration-200"
            >
              Neomi7266@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-right">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">ניווט</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#home"
                  className="text-gray-600 hover:text-[#F4842F] transition-colors duration-200"
                >
                  דף הבית
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-gray-600 hover:text-[#F4842F] transition-colors duration-200"
                >
                  מוצרים
                </a>
              </li>
              <li>
                <a
                  href="/#reviews"
                  className="text-gray-600 hover:text-[#F4842F] transition-colors duration-200"
                >
                  ביקורות
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-100 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CNICE. כל הזכויות שמורות
        </p>
      </div>
    </div>
  );
};

export default Footer;
