import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
// import BannerImage from "../../../assets/about-banner.png";

const WorkBanner = ({ title = "Work" }) => {
  return (
    <div
      className="relative w-full h-72 md:h-80 bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url("/assets/gallery-optimized/6.jpg")`,
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="absolute inset-0 bg-black/50 z-[-1]" />{" "}
        {/* ← Overlay */}
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

export default WorkBanner;
