import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryImages, getSectionLabel } from "../data/galleryImages";
import SectionHeader from "./ui/SectionHeader";
import GalleryLightbox from "./ui/GalleryLightbox";
import Button from "./ui/Button";
import { fadeUp } from "../utils/motion";

const GallerySection = ({ preview = true }) => {
  const [modal, setModal] = useState(null);

  const featuredImages = galleryImages.filter((img) => img.featured).slice(0, 8);

  const openModal = (item) => {
    setModal({
      title: "Featured Work",
      images: featuredImages,
      selectedImage: item,
      allImages: featuredImages,
    });
  };

  const closeModal = () => setModal(null);

  return (
    <section id="gallery" className="py-20 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Portfolio"
          subtitle="Explore our work across wildfire response, training, and emergency support services throughout the Garden Route."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredImages.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => openModal(item)}
              className={`overflow-hidden rounded-xl shadow-md group text-left cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              variants={fadeUp}
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={`${getSectionLabel(item.section)} portfolio`}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 ? "h-80 md:h-full min-h-[280px]" : "h-52"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
                  {getSectionLabel(item.section)}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {preview && (
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button className="gap-2">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
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
    </section>
  );
};

export default GallerySection;
