import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft } from "lucide-react";

import { getSectionLabel } from "../../data/galleryImages";

const GalleryLightbox = ({ modal, onClose, onSelectImage, onBack }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!modal) return;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal, handleKeyDown]);

  if (!modal) return null;

  const GalleryGrid = ({ images }) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelectImage(item)}
          className="overflow-hidden rounded-lg shadow group text-left cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt={`${getSectionLabel(item.section)} portfolio`}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h3
            id="gallery-modal-title"
            className="text-2xl font-bold text-gray-900"
          >
            {modal.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 flex-grow">
          {modal.selectedImage ? (
            <div className="flex flex-col items-center">
              <img
                src={modal.selectedImage.imageUrl}
                alt={`Portfolio image ${modal.selectedImage.id}`}
                className="max-h-[65vh] object-contain rounded-lg"
              />
            </div>
          ) : (
            <GalleryGrid images={modal.images} />
          )}
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          {modal.selectedImage && (
            <button
              type="button"
              onClick={onBack}
              className="btn flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Gallery
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white font-medium hover:bg-gray-50 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
