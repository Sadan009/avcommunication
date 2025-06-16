import React from "react";
import {
  Building2,
  Users,
  Trophy,
  HeartHandshake,
  Globe2,
  Briefcase,
  Mountain,
} from "lucide-react";
import ServicesBanner from "../components/sections/banner-section/services-banner";

const services = [
  {
    title: "Corporate Events & Activities",
    description:
      "We organize custom corporate events such as press conferences, product launches, retreats, and team-building programs to enhance productivity and morale.",
    icon: Building2,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Outdoor Corporate Activities",
    description:
      "We arrange outdoor events like adventure sports, team bonding experiences, and off-site ceremonies that rejuvenate corporate teams.",
    icon: Mountain,
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Sporting Events",
    description:
      "We manage marathons, cycling events, and recreational sports that promote fitness, engagement, and brand visibility across India.",
    icon: Trophy,
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "CSR Activities",
    description:
      "We help clients execute impactful CSR events to support causes, raise funds, and connect with the community in meaningful ways.",
    icon: HeartHandshake,
    color: "from-pink-600 to-red-700",
  },
  {
    title: "Multi-City Activations",
    description:
      "We execute large-scale campaigns across multiple cities for brand promotions, employee outreach, and product awareness.",
    icon: Globe2,
    color: "from-green-600 to-green-800",
  },
  {
    title: "Employee Engagement",
    description:
      "We deliver engaging in-office and off-site activities that build team spirit, boost retention, and create a positive workplace culture.",
    icon: Users,
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
            We deliver customized events across corporate, sporting, and CSR
            domains nationwide.
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
