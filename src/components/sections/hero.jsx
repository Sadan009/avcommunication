// Banner Component
import React from 'react';

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./src/assets/banner-1.png')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">
              Crafting unforgettable
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              brand Journeys
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-medium mb-8">
            Amplifying brand's presence
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-12 w-6 h-6 bg-purple-500/60 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-16 w-5 h-5 bg-blue-300/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      
      {/* Bottom Wave (Optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 lg:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,60 1200,60 L1200,120 L0,120 Z" fill="white" fillOpacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;