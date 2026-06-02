import React, { useState, useEffect } from "react";
import {
  portfolioSections,
  splitGalleryImages,
} from "../data/galleryImages";

const GalleryGrid = ({ images, onImageClick, columns = 4 }) => (
  <div
    className={
      columns === 4
        ? "grid grid-cols-2 lg:grid-cols-4 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    }
  >
    {images.map((item) => (
      <button
        key={item.id}
        type="button"
        onClick={() => onImageClick(item)}
        className="overflow-hidden rounded-lg shadow-lg group text-left cursor-pointer"
      >
        <div className="relative">
          <img
            src={item.imageUrl}
            alt={`${item.section} portfolio image`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
        </div>
      </button>
    ))}
  </div>
);

const PortfolioPreview = ({ title, images, mounted, onSeeMore, onImageClick }) => {
  const { preview, seeMore, all } = splitGalleryImages(images);
  const hasMore = seeMore.length > 0;

  if (preview.length === 0) {
    return null;
  }

  return (
    <div>
      <GalleryGrid
        images={preview}
        onImageClick={(item) => onImageClick(item, all)}
        columns={4}
      />
      {hasMore && (
        <div className="text-center mt-8">
          {mounted ? (
            <button
              type="button"
              onClick={() => onSeeMore(title, seeMore, all)}
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
      )}
    </div>
  );
};

const GallerySection = () => {
  const [modal, setModal] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = (
    title,
    images,
    allImages = images,
    selectedImage = null
  ) => {
    if (!mounted) return;
    setModal({ title, images, allImages, selectedImage });
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (!mounted) return;
    setModal(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const handleImageClick = (title, allImages, item) => {
    openModal(title, allImages, allImages, item);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Portfolio</h2>
          <div className="w-16 h-1 bg-[rgb(252,3,13)] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our work across wildfire response, training, and emergency
            support services throughout the Garden Route region.
          </p>
        </div>

        <div className="space-y-16">
          {portfolioSections.map((section) => {
            const hasSubcategories = section.subcategories?.length > 0;
            const sectionImages = section.images ?? [];
            const visibleSubcategories =
              section.subcategories?.filter(
                (sub) => splitGalleryImages(sub.images).preview.length > 0
              ) ?? [];

            if (!hasSubcategories && splitGalleryImages(sectionImages).preview.length === 0) {
              return null;
            }

            if (hasSubcategories && visibleSubcategories.length === 0) {
              return null;
            }

            return (
              <div key={section.id}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {section.title}
                </h3>

                {hasSubcategories ? (
                  <div className="space-y-12">
                    {section.subcategories.map((subcategory) => {
                      const { preview } = splitGalleryImages(subcategory.images);

                      if (preview.length === 0) {
                        return null;
                      }

                      return (
                        <div key={subcategory.id}>
                          <h4 className="text-xl font-semibold text-gray-800 mb-6">
                            {subcategory.title}
                          </h4>
                          <PortfolioPreview
                            title={subcategory.title}
                            images={subcategory.images}
                            mounted={mounted}
                            onSeeMore={openModal}
                            onImageClick={(item, allImages) =>
                              handleImageClick(
                                subcategory.title,
                                allImages,
                                item
                              )
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <PortfolioPreview
                    title={section.title}
                    images={sectionImages}
                    mounted={mounted}
                    onSeeMore={openModal}
                    onImageClick={(item, allImages) =>
                      handleImageClick(section.title, allImages, item)
                    }
                  />
                )}
              </div>
            );
          })}
        </div>

        {mounted && modal && (
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

            <div className="relative bg-white rounded-xl text-left shadow-xl transform transition-all sm:max-w-7xl sm:w-full max-h-[80vh] flex flex-col overflow-hidden">
              <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4 flex-shrink-0 rounded-t-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className="text-2xl leading-6 font-bold text-gray-900"
                    id="modal-title"
                  >
                    {modal.title}
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

              <div className="overflow-y-auto p-4 flex-grow">
                {modal.selectedImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={modal.selectedImage.imageUrl}
                      alt={`Portfolio image ${modal.selectedImage.id}`}
                      className="max-h-[60vh] object-contain"
                    />
                  </div>
                ) : (
                  <GalleryGrid
                    images={modal.images}
                    onImageClick={(item) =>
                      setModal((current) =>
                        current ? { ...current, selectedImage: item } : current
                      )
                    }
                  />
                )}
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse flex-shrink-0 rounded-b-xl">
                {modal.selectedImage && (
                  <button
                    type="button"
                    onClick={() =>
                      setModal((current) =>
                        current ? { ...current, selectedImage: null } : current
                      )
                    }
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm ml-4 px-4 py-2 bg-[rgb(252,3,13)] text-base font-medium text-white cursor-pointer sm:w-auto sm:text-sm"
                  >
                    Back to Gallery
                  </button>
                )}
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
