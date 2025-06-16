import React, { useState } from 'react'
import WorkBanner from '../components/sections/banner-section/work-banner'

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Array of image URLs for the gallery
  const images = [
    "https://images.unsplash.com/photo-1684513159158-5b23abff325e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // roadside banner
    "https://images.unsplash.com/photo-1653724618298-8838668f7d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // LED billboard at night
    "https://images.unsplash.com/photo-1738573948473-c9f9141b09c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // urban billboard
    "https://images.unsplash.com/photo-1650499616479-c13ceea331ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // building wall ad
    "https://images.unsplash.com/photo-1706477003185-4160bd009a68?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // street poster
    "https://images.unsplash.com/photo-1742715342270-79af495e9692?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // event banner outdoor
    "https://images.unsplash.com/photo-1667150794375-bcbe9af19dea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // hoarding board
    "https://images.unsplash.com/photo-1745725427532-4c52cdc6d4ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // advertisement board at highway
    "https://images.unsplash.com/photo-1591622725460-6cc55d906f0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // bus stop advertisement
    "https://images.unsplash.com/photo-1655080745085-d38ef9c37051?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // busy street with banners
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
}

export default Work