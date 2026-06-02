// Load every image in the gallery folder, keeping the original filenames.
const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,JPG}", {
  eager: true,
});

const EXCLUDED_IMAGES = new Set([
  "Header.jpg",
  "Header2.jpg",
  "fws-team.jpg",
]);

const IMAGE_CATEGORIES = {
  // New Facebook photos — shown on the page
  "704955918_1389228196573918_340388310200299369_n.jpg": {
    section: "fires",
    featured: true,
  },
  "663093385_1349998757163529_7313551084038605867_n.jpg": {
    section: "fires",
    featured: true,
  },
  "training.jpg": { section: "fires", featured: true },
  "training2.jpg": { section: "fires", featured: true },
  "training3.jpg": { section: "fires", featured: true },
  "training1.jpg": { section: "training", featured: true },
  "training4.jpg": { section: "training", featured: true },
  "training5.jpg": { section: "training", featured: true },
  "training6.jpg": { section: "training", featured: true },
  "700581887_1385090263654378_6328077751929353362_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "701421300_1385090660321005_1474978010788171960_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "706718778_1391818926314845_817533575072853181_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "710000489_1391819412981463_1694693214501713261_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "706088931_1391821616314576_8940235768030886640_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "707874376_1391826236314114_1580023440470940141_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "709679955_1391827476313990_6453523015661809581_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "708694973_1391829016313836_5665111837060542407_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "707693743_1391829306313807_1515996912488214381_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "707509666_1391829382980466_1069539874419639137_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "709608759_1391829509647120_101061996303754185_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "708363010_1391829552980449_4123379327267148344_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "710555761_1397222442441160_8530545870628082150_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "712703740_1397222505774487_1731422579169837392_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "710709008_1397222569107814_3318900822887906954_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "710516921_1397222772441127_3507633377366829345_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },
  "711249146_1397222942441110_5618224494669387826_n.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: true,
  },

  // Archive photos — shown via See More only
  "20181029_191319_Signature.jpg": { section: "fires", featured: false },
  "20181029_191336_Signature.jpg": { section: "fires", featured: false },
  "20181101_155817_Signature.jpg": { section: "fires", featured: false },
  "DJI_0451.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: false,
  },
  "DJI_0505.jpg": { section: "fires", featured: false },
  "DJI_0548.jpg": { section: "fires", featured: false },
  "DJI_0575.jpg": { section: "fires", featured: false },
  "FB_IMG_1540921435293.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: false,
  },
  "FB_IMG_1540921473196.jpg": { section: "fires", featured: false },
  "gallery-1.jpg": { section: "fires", featured: false },
  "gallery-2.jpg": { section: "fires", featured: false },
  "gallery-3.jpg": { section: "training", featured: false },
  "gallery-4.jpg": { section: "fires", featured: false },
  "gallery-5.jpg": { section: "fires", featured: false },
  "gallery-6.jpg": { section: "training", featured: false },
  "gallery-7.jpg": { section: "fires", featured: false },
  "IMG_20241015_084548.jpg": { section: "fires", featured: false },
  "IMG_20250217_134955.jpg": { section: "fires", featured: false },
  "IMG_20250311_135304.jpg": { section: "fires", featured: false },
  "IMG_20250326_142803.jpg": { section: "fires", featured: false },
  "IMG_20250514_095411.jpg": { section: "fires", featured: false },
  "IMG_20250514_124040.jpg": { section: "fires", featured: false },
  "WhatsApp Image 2024-11-03 at 19.21.46_d78526ed.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2024-11-03 at 19.21.47_6835de1f.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2024-11-03 at 19.21.48_2a0e3042.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.18_2522f1d6.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.18_66ac66c7.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.19_17988821.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.21_db005f51.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.33_0451d70d.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.33_863b4731.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.34_982c5d13.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.34_f2c69aef.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.35_05b7818d.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.35_4d398e8c.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.36_243fc72d.jpg": {
    section: "training",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.36_2751d431.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.36_b7d70e98.jpg": {
    section: "otherServices",
    subcategory: "treeFalling",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.37_1913d760.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.37_54caf8dc.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.37_a4df9407.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.37_f0236d6d.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.38_79cd1697.jpg": {
    section: "fires",
    featured: false,
  },
  "WhatsApp Image 2025-12-15 at 14.33.38_f7f2d755.jpg": {
    section: "fires",
    featured: false,
  },
};

export const PREVIEW_COUNT = 4;

const sortGalleryImages = (a, b) => {
  if (a.featured !== b.featured) {
    return Number(b.featured) - Number(a.featured);
  }

  return a.name.localeCompare(b.name);
};

export const galleryImages = Object.entries(images)
  .map(([path, module], index) => {
    const name = path.split("/").pop();
    const category = IMAGE_CATEGORIES[name] ?? {
      section: "fires",
      featured: false,
    };

    return {
      id: index + 1,
      name,
      imageUrl: module.default,
      section: category.section,
      subcategory: category.subcategory ?? null,
      featured: category.featured ?? false,
    };
  })
  .filter((img) => !EXCLUDED_IMAGES.has(img.name))
  .sort(sortGalleryImages);

export const splitGalleryImages = (images) => {
  const featured = images.filter((img) => img.featured);
  const archive = images.filter((img) => !img.featured);
  const preview = featured.slice(0, PREVIEW_COUNT);
  const seeMore = [...featured.slice(PREVIEW_COUNT), ...archive];

  return { preview, seeMore, all: images };
};

export const portfolioSections = [
  {
    id: "fires",
    title: "Fires",
    images: galleryImages.filter((img) => img.section === "fires"),
  },
  {
    id: "training",
    title: "Training",
    images: galleryImages.filter((img) => img.section === "training"),
  },
  {
    id: "otherServices",
    title: "Other Services",
    subcategories: [
      {
        id: "treeFalling",
        title: "Tree Falling",
        images: galleryImages.filter(
          (img) =>
            img.section === "otherServices" && img.subcategory === "treeFalling"
        ),
      },
      {
        id: "searchAndRescue",
        title: "Search and Rescue",
        images: galleryImages.filter(
          (img) =>
            img.section === "otherServices" &&
            img.subcategory === "searchAndRescue"
        ),
      },
      {
        id: "stockCars",
        title: "Stock Cars",
        images: galleryImages.filter(
          (img) =>
            img.section === "otherServices" && img.subcategory === "stockCars"
        ),
      },
      {
        id: "motorVehicleAccidents",
        title: "Motor Vehicle Accidents",
        images: galleryImages.filter(
          (img) =>
            img.section === "otherServices" &&
            img.subcategory === "motorVehicleAccidents"
        ),
      },
    ],
  },
];
