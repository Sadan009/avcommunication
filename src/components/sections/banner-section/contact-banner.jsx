import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = ({ title = "Contact" }) => {
  return (
    <div
      className="relative w-full h-64 md:h-80 bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url("/assets/about-banner.png")`,
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium text-white">
          <Home className="w-4 h-4" />
          <Link
            to="/"
            className="hover:underline hover:text-red-400 transition"
          >
            HOME
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="uppercase">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
