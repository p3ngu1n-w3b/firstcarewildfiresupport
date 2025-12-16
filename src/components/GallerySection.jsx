import React, { useState, useEffect } from "react";
import { galleryImages, featuredGalleryImages } from "../data/galleryImages";

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted state when component mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (item = null) => {
    if (!mounted) return;
    setSelectedImage(item);
    setIsModalOpen(true);
    // Only manipulate DOM on client side
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (!mounted) return;
    setIsModalOpen(false);
    // Only manipulate DOM on client side
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Portfolio</h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our showcase of in-progress and completed projects
            throughout the Garden Route region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGalleryImages.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={`Gallery image ${item.id}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {mounted ? (
            <button
              onClick={() => openModal()}
              className="px-6 py-3 bg-[rgb(252,3,13)] text-white font-medium rounded-md hover:bg-[rgb(253,91,98)] cursor-pointer"
            >
              See More
            </button>
          ) : (
            <div className="px-6 py-3 bg-[rgb(252,3,13)] text-white font-medium rounded-md inline-block">
              See More
            </div>
          )}
        </div>

        {/* Gallery Modal - Only render on client side */}
        {mounted && isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-labelledby="gallery-modal"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-gray-300"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="relative bg-white rounded-xl text-left shadow-xl transform transition-all sm:max-w-7xl sm:w-full max-h-[80vh] flex flex-col overflow-hidden">
              <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4 flex-shrink-0 rounded-t-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className="text-2xl leading-6 font-bold text-gray-900"
                    id="modal-title"
                  >
                    {selectedImage
                      ? "Selected Image"
                      : "Our Portfolio"}
                  </h3>
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-700 cursor-pointer focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable content area */}
              <div className="overflow-y-auto p-4 flex-grow">
                {selectedImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedImage.imageUrl}
                      alt={`Gallery image ${selectedImage.id}`}
                      className="max-h-[60vh] object-contain"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((item) => (
                      <div
                        key={item.id}
                        className="overflow-hidden rounded-lg shadow-lg"
                      >
                        <div className="relative">
                          <img
                            src={item.imageUrl}
                            alt={`Gallery image ${item.id}`}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex-shrink-0 rounded-b-xl">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 cursor-pointer sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
