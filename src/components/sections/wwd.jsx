import React from "react";
import {
  Building2,
  Bus ,
  Truck,
  Clock ,
  Cpu ,
  BarChart4 ,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "LED Billboards",
      description: "Dynamic ads placed at strategic high-traffic locations.",
      icon: Building2,
      color: "bg-blue-500",
    },
    {
      title: "Digital Street Furniture",
      description: "Interactive and location-based ad displays.",
      icon: Bus ,
      color: "bg-green-500",
    },
    {
      title: "LED Vans",
      description: "Mobile LED display vehicles for city-wide brand exposure.",
      icon: Truck,
      color: "bg-yellow-500",
    },
    {
      title: "Contextual Campaigns",
      description: "Content triggered by real-time factors like time, weather, location, or live events.",
      icon: Clock ,
      color: "bg-red-500",
    },
    {
      title: "Programmatic Advertising",
      description: "Smart, data-driven campaign execution for speed and precision.",
      icon: Cpu ,
      color: "bg-purple-500",
    },
    {
      title: "Brand Impact Measurement",
      description: "Advanced attribution tools to track footfall, engagement, and brand lift.",
      icon: BarChart4 ,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="mx-auto p-8 py-16 lg:py-16 bg-gray-200 mb-10">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full lg:text-3xl md:text-2xl font-semibold mb-8 border border-blue-100">
          <CheckCircle className="w-4 h-4" />
          <h2 className="text-3xl font-bold ">
            What We Do?
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              {/* <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div> */}
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link to="/services" 
         className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 hover:shadow-lg">
          View All Services
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesOverview;
