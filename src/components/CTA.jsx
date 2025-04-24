import React from "react"; 
import { cta } from "../assets"; // Replace with your promotion image

const CTA = () => {
  return (
    <div className="w-full bg-[#FFF5ED] py-16 md:py-24">
      <div className="md:max-w-[1280px] m-auto grid md:grid-cols-2 gap-12 items-center max-w-[600px] px-4 md:px-6">
        {/* Promotion Image */}
        <div className="order-last md:order-first">
          <img src={cta} alt="CNICE מבצע מיוחד - שמפו + מסכה ב-200 ש״ח" />
        </div>

        {/* CTA Content */}
        <div className="text-right space-y-4">
          <div className="bg-[#F4842F]/10 px-4 py-2 rounded-full inline-block">
            <p className="text-[#F4842F] font-medium">מבצע מיוחד!</p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#F4842F]">שמפו + מסכה ב-200 ש״ח</span> בלבד
          </h1>

          <p className="text-lg text-gray-700">
            הרכיבו את ערכת הטיפוח המושלמת עם שמפו ומסכת שיער איכותיים – במחיר מיוחד של 200 ש״ח בלבד!
          </p>

          <div className="flex flex-col md:flex-row-reverse gap-4 justify-end">
            {/* WhatsApp Buy Now Button */}
            <a
              href="http://wa.link/vbahg2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-4 rounded-lg bg-[#F4842F] hover:bg-[#e67a2b] text-white font-bold text-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
            >
              קנו עכשיו והחסכו
            </a>

            {/* Discover Products Button */}
            <a
              href="/#products"
              className="mt-4 px-8 py-4 rounded-lg border-2 border-[#F4842F] text-[#F4842F] hover:bg-[#F4842F]/10 font-bold text-lg transition-colors duration-200 text-center"
            >
              גלו את המוצרים
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
