import React from "react";
import {
  Building2 ,
  Truck,
  Cpu,
  BarChart4,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AboutBanner from "../components/sections/banner-section/about-banner";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    {
      icon: Building2,
      title: "LED Billboards",
      description:
        "We offer high-resolution LED billboards at prime city locations, ensuring maximum visibility and engagement for your brand.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Truck,
      title: " LED Display Vans",
      description:
        "Mobile LED vans that take your brand message directly to the streets — perfect for city-wide campaigns and event promotions.",
      color: "from-yellow-600 to-yellow-400",
    },
    {
      icon: Cpu,
      title: " Programmatic Advertising",
      description:
        " Execute automated and data-driven advertising campaigns using real-time programmatic technology for better efficiency and precision.Engagement activities, BTL campaigns, and brand activations.",
      color: "from-green-600 to-green-400",
    },
    {
      icon: BarChart4,
      title: "Analytics & Attribution",
      description:
        " Get detailed campaign insights — from footfall tracking to brand lift analysis — with our advanced measurement tools.",
      color: "from-red-400 to-red-600",
    },
  ];

  const achievements = [
    "500+ Successful Events",
    "50+ Corporate Clients",
    "10+ Years Experience",
    "Pan-India Presence",
  ];

  return (
    <>
      <AboutBanner />
      {/* Main About Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-100">
              <CheckCircle className="w-4 h-4" />
              About Our Company
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              About <span className="text-blue-600">AV Communication</span>
            </h1>

            <div className="relative">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                As one of Lucknow's most innovative media companies, we leverage the
                power of creative excellence, unbeatable locations, and smart audience
                data to change the game for advertisers. Our media powers brands to
                break through, be relevant, and connect with audiences like never
                before. AV Communication understands its role in driving cultural impact. 
                Weare trusted by the millions who engage with our media every day,
                drivinga strong relationship between brands and audiences. We are 
                leading the industry, bringing intelligence to out of home
                bydeploying digital at scale and embracing new technologies.
              </p>


              {/* Decorative line */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-2xl p-6 mb-4 border border-blue-100 lg:w-[210px] lg:h-[140px] w-[170px] h-[140px]">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm md:text-base">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 md:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                  <CheckCircle className="w-4 h-4" />
                  Our Vision
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Leading the Future of Event Management
                </h2>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-light">
                  Our iron-clad commitment to deliverimpact where it matters. Our medianetwork leverages 
                  the power of thelargest canvases across Lucknow to growbrands and businesses by driving
                   impact,engagement, fame, and trust across every touchpoint
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </Link>
                  {/* <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20">
                    View Our Portfolio
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
