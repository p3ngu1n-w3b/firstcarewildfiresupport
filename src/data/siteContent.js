import nisproAutoLogo from "../assets/sponsors/nispro-auto-george.jpg";
import tyremartLogo from "../assets/sponsors/tyremart-george.png";
import thousandSensationsLogo from "../assets/sponsors/thousand-sensations-george.jpg";
import optimumHostingLogo from "../assets/sponsors/optimumhosting.jpg";
import cmsLogo from "../assets/sponsors/cmsLogo.jpg";
import grcom from "../assets/sponsors/grcom.png";
import besafe from "../assets/sponsors/be-safe.png";
import quattroLubricantsLogo from "../assets/sponsors/quattro-lubricants.png";

export const contact = {
  phones: [
    { display: "079 190 9428", tel: "0791909428" },
    { display: "084 314 4323", tel: "0843144323" },
  ],
  email: "firstcarewildfire@gmail.com",
  location: "George, Western Cape",
  whatsapp: "27791909428",
  sponsorshipContact: {
    name: "Charlene",
    phone: "0843144323",
    phoneDisplay: "084 314 4323",
  },
};

export const social = {
  facebook:
    "https://www.facebook.com/people/Firstcare-Wildfire-Support/100064602524953/",
  instagram: "https://www.instagram.com/firstcare.george/",
};

export const fireSeasonAlert = {
  enabled: true,
  message:
    "Fire season is active in the Garden Route — contact us for consultation or emergency support.",
  severity: "warning",
};

export const navLinks = [
  { id: "home", label: "Home", type: "section" },
  { id: "about", label: "About", type: "section" },
  { id: "services", label: "Services", type: "section" },
  { id: "gallery", label: "Gallery", type: "route", path: "/gallery" },
  { id: "donations", label: "Donate", type: "section" },
  { id: "contact", label: "Contact", type: "section" },
];

export const impactStats = [
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 100, suffix: "+", label: "Training Sessions" },
];

export const services = [
  {
    id: "events",
    title: "Events",
    description: "Providing fire safety services at various events.",
    icon: "calendar",
  },
  {
    id: "consultation",
    title: "Consultation",
    description:
      "Assisting landowners with reducing fire risks on their properties.",
    icon: "message",
  },
  {
    id: "control-burns",
    title: "Control Burns",
    description:
      "Planning and executing all types of control burns for landowners. From stackburns, grass burns and large ecological burns, we do it all.",
    icon: "flame",
  },
  {
    id: "training",
    title: "Training",
    description:
      "Accredited First Aid, Fire Marshall / use of extinguishers, Basic Wildfire Training, Snake Awareness Workshops, and First Aid Workshops.",
    icon: "graduation",
  },
];

export const donationTiers = [
  { amount: "R100", impact: "Protective gloves for a volunteer" },
  { amount: "R500", impact: "Firefighting equipment maintenance" },
  { amount: "R1000", impact: "Training materials for community workshops" },
];

export const bankDetails = {
  accountType: "Capitec savings account",
  accountName: "Firstcare Wildfire",
  accountNumber: "1967586371",
  reference: "Wildfire",
};

export const sponsors = [
  {
    name: "Nispro Auto",
    logo: nisproAutoLogo,
    url: "https://nisproautogeorge.co.za/",
  },
  {
    name: "Tyremart",
    logo: tyremartLogo,
    url: "https://www.tyremart.co.za/",
  },
  {
    name: "Thousand Sensations",
    logo: thousandSensationsLogo,
    url: "https://thousandsensations.co.za/",
  },
  {
    name: "Optimum Hosting",
    logo: optimumHostingLogo,
    url: "https://www.ohs.co.za/",
  },
  {
    name: "CMS Towing",
    logo: cmsLogo,
    url: "https://www.facebook.com/profile.php?id=100063961935693",
  },
  {
    name: "GardenRoute Communication",
    logo: grcom,
    url: "https://grcom.co.za/ws01/",
  },
  {
    name: "Be Safe Paramedical",
    logo: besafe,
    url: "https://be-safe.co.za/",
  },
  {
    name: "Quattro Lubricants",
    logo: quattroLubricantsLogo,
    url: "https://www.facebook.com/share/1G5ZQ5nUfN/?mibextid=wwXIfr",
    logoClassName: "max-h-20 w-auto object-contain",
  },
];

export const heroTaglines = [
  "Wildfire Prevention",
  "Fire Risk Reduction",
  "Professional Training",
  "24/7 Emergency Support",
];

export const trustedBy = [
  "Local Fire Departments",
  "Southern Cape Fire Protection Association",
  "Fire Management Units",
];
