import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/assets/gallery-optimized/22.jpg",
    heading1: "Crafting unforgettable",
    heading2: "brand Journeys",
    sub: "Amplifying brand's presence",
  },
  {
    image: "/assets/gallery-optimized/36.jpg",
    heading1: "Your Vision",
    heading2: "Our Creativity",
    sub: "We bring ideas to life",
  },
  {
    image: "/assets/gallery-optimized/25.jpg",
    heading1: "Innovative Solutions",
    heading2: "Exceptional Results",
    sub: "Transforming brands digitally",
  },
];

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // Preload effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              style={{
                backgroundImage: loaded ? `url('${slide.image}')` : "none",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block mb-2">{slide.heading1}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                    {slide.heading2}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-medium mb-8">
                  {slide.sub}
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    to="/work"
                    className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-12 w-6 h-6 bg-purple-500/60 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
      <div
        className="absolute bottom-1/4 left-16 w-5 h-5 bg-blue-300/60 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 sm:h-16 lg:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="0.1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
