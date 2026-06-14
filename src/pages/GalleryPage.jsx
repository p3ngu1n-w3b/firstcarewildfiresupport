import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioSections, splitGalleryImages } from "../data/galleryImages";
import SectionHeader from "../components/ui/SectionHeader";
import GalleryLightbox from "../components/ui/GalleryLightbox";
import { fadeUp } from "../utils/motion";

const GalleryGrid = ({ images, onImageClick, columns = 4 }) => (
  <div
    className={
      columns === 4
        ? "grid grid-cols-2 lg:grid-cols-4 gap-4"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    }
  >
    {images.map((item) => (
      <button
        key={item.id}
        type="button"
        onClick={() => onImageClick(item)}
        className="overflow-hidden rounded-xl shadow-md group text-left cursor-pointer"
      >
        <img
          src={item.imageUrl}
          alt={`${item.section} portfolio`}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
    ))}
  </div>
);

const CategoryTabs = ({ sections, active, onChange }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-10">
    <button
      onClick={() => onChange("all")}
      className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors cursor-pointer ${
        active === "all"
          ? "bg-brand text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      All
    </button>
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onChange(section.id)}
        className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors cursor-pointer ${
          active === section.id
            ? "bg-brand text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        {section.title}
      </button>
    ))}
  </div>
);

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modal, setModal] = useState(null);

  const openModal = (title, images, selectedImage = null) => {
    setModal({ title, images, selectedImage, allImages: images });
  };

  const closeModal = () => setModal(null);

  const visibleSections = portfolioSections.filter((section) => {
    if (activeCategory !== "all" && section.id !== activeCategory) return false;

    if (section.subcategories) {
      return section.subcategories.some(
        (sub) => sub.images.length > 0
      );
    }
    return section.images.length > 0;
  });

  return (
    <div className="pt-24 pb-16 section-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Full Portfolio"
          subtitle="Browse our complete collection of wildfire response, training, and emergency support work."
        />

        <CategoryTabs
          sections={portfolioSections}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="space-y-16">
          {visibleSections.map((section) => {
            const hasSubcategories = section.subcategories?.length > 0;

            return (
              <motion.div
                key={section.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h3>

                {hasSubcategories ? (
                  <div className="space-y-10">
                    {section.subcategories.map((sub) => {
                      if (sub.images.length === 0) return null;
                      const { preview, seeMore, all } = splitGalleryImages(
                        sub.images
                      );
                      const displayImages = [...preview, ...seeMore];

                      return (
                        <div key={sub.id}>
                          <h4 className="text-lg font-semibold text-gray-700 mb-4">
                            {sub.title}
                          </h4>
                          <GalleryGrid
                            images={displayImages}
                            onImageClick={(item) =>
                              openModal(sub.title, all, item)
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <GalleryGrid
                    images={section.images}
                    onImageClick={(item) =>
                      openModal(section.title, section.images, item)
                    }
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <GalleryLightbox
        modal={modal}
        onClose={closeModal}
        onSelectImage={(item) =>
          setModal((current) =>
            current ? { ...current, selectedImage: item } : current
          )
        }
        onBack={() =>
          setModal((current) =>
            current ? { ...current, selectedImage: null } : current
          )
        }
      />
    </div>
  );
};

export default GalleryPage;
