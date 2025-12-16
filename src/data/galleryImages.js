// Load every image in the gallery folder, keeping the original filenames.
// Sorting by filename keeps a stable, human-friendly order.
const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,JPG}", {
  eager: true,
});

export const galleryImages = Object.entries(images)
  .map(([path, module], index) => ({
    id: index + 1,
    name: path.split("/").pop(),
    imageUrl: module.default,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Featured images to show on the main gallery page:
// explicitly pick files named "gallery-1" through "gallery-6"
export const featuredGalleryImages = galleryImages
  .filter((img) => /^gallery-[1-6]\./i.test(img.name))
  .slice(0, 6);
