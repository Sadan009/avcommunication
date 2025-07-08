import React from "react";
import {
  Building2,
  Truck,
  Cpu,
  BarChart4,
  TimerReset,
  MapPin,
} from "lucide-react";
import ServicesBanner from "../components/sections/banner-section/services-banner";

const services = [
  {
    title: "LED Billboards",
    description:
      "We offer high-resolution LED billboards at prime city locations, ensuring maximum visibility and engagement for your brand.",
    icon: Building2,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Dynamic Content Delivery",
    description:
      " Real-time content updates triggered by weather, time, location, or local events like sports.",
    icon: TimerReset,
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "LED Vans",
    description:
      "Mobile LED vans that take your brand message directly to the streets — perfect for city-wide campaigns and event promotions.",
    icon: Truck,
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "Media Inventory Access",
    description:
      "Choose from a wide network of premium LED locations across Lucknow — including high-traffic areas like Phoenix Mall, Hazratganj, and Airport Road.",
    icon: MapPin,
    color: "from-pink-600 to-red-700",
  },
  {
    title: " Programmatic Advertising",
    description:
      "execute automated and data-driven advertising campaigns using real-time programmatic technology for better efficiency and precision.",
    icon: Cpu,
    color: "from-green-600 to-green-800",
  },
  {
    title: "Analytics & Attribution",
    description:
      "Get detailed campaign insights — from footfall tracking to brand lift analysis — with our advanced measurement tools.",
    icon: BarChart4,
    color: "from-yellow-500 to-yellow-700",
  },
];

const Services = () => {
  return (
    <>
      <ServicesBanner />
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver high-impact digital advertising experiences across
            Lucknow through LED billboards, mobile LED vans, and dynamic content
            campaigns—powered by data, creativity, and premium locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-gray-100 shadow-md bg-white hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
