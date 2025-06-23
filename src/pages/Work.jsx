import React, { useState } from "react";
import WorkBanner from "../components/sections/banner-section/work-banner";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Array of image URLs for the gallery
  const images = [
    "/assets/gallery-optimized/1.jpg",
    "/assets/gallery-optimized/2.jpg",
    "/assets/gallery-optimized/3.jpg",
    "/assets/gallery-optimized/4.jpg",
    "/assets/gallery-optimized/5.jpg",
    "/assets/gallery-optimized/6.jpg",
    "/assets/gallery-optimized/7.jpg",
    "/assets/gallery-optimized/8.jpg",
    "/assets/gallery-optimized/9.jpg",
    "/assets/gallery-optimized/10.jpg",
    "/assets/gallery-optimized/11.jpg",
    "/assets/gallery-optimized/13.jpg",
    "/assets/gallery-optimized/14.jpg",
    "/assets/gallery-optimized/15.jpg",
    "/assets/gallery-optimized/16.jpg",
    "/assets/gallery-optimized/17.jpg",
    "/assets/gallery-optimized/18.jpg",
    "/assets/gallery-optimized/20.jpg",
    "/assets/gallery-optimized/21.jpg",
    "/assets/gallery-optimized/22.jpg",
    "/assets/gallery-optimized/23.jpg",
    "/assets/gallery-optimized/24.jpg",
    "/assets/gallery-optimized/25.jpg",
    "/assets/gallery-optimized/26.jpg",
    "/assets/gallery-optimized/27.jpg",
    "/assets/gallery-optimized/28.jpg",
    "/assets/gallery-optimized/29.jpg",
    "/assets/gallery-optimized/30.jpg",
    "/assets/gallery-optimized/31.jpg",
    "/assets/gallery-optimized/32.jpg",
    "/assets/gallery-optimized/33.jpg",
    "/assets/gallery-optimized/34.jpg",
    "/assets/gallery-optimized/35.jpg",
    "/assets/gallery-optimized/36.jpg",
    "/assets/gallery-optimized/37.jpg",
    "/assets/gallery-optimized/38.jpg",
    "/assets/gallery-optimized/39.jpg",
    "/assets/gallery-optimized/40.jpg",
    "/assets/gallery-optimized/41.jpg",
    "/assets/gallery-optimized/42.jpg",
    "/assets/gallery-optimized/43.jpg",
    "/assets/gallery-optimized/44.jpg",
    "/assets/gallery-optimized/45.jpg",
    "/assets/gallery-optimized/46.jpg",
    "/assets/gallery-optimized/47.jpg",
    "/assets/gallery-optimized/48.jpg",
    "/assets/gallery-optimized/49.jpg",
    "/assets/gallery-optimized/50.jpg",
  ];

  return (
    <>
      <WorkBanner />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Showcasing Our Latest Successes
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our recent campaigns that highlight our creativity and
            effectiveness in delivering exceptional results across various
            platforms.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image
            >
              <button
                className="absolute top-2 right-2 text-white bg-black/70 hover:bg-black/90 rounded-full p-2 z-10"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Enlarged"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Work;
