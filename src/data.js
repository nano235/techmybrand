import homeWhite1 from "./assets/images/home-white-card-1.webp";
import homeWhite2 from "./assets/images/home-white-card-2.webp";
import homeWhite3 from "./assets/images/home-white-card-3.webp";
import homeBlue1 from "./assets/images/home-blue-card-1.webp";
import homeBlue2 from "./assets/images/home-blue-card-2.webp";
import homeBlue3 from "./assets/images/home-blue-card-3.webp";
import courage from "./assets/images/courage.webp";
import confidence from "./assets/images/confidence.webp";
import fortune from "./assets/images/fortune.webp";
import analawgy from "./assets/images/clients/analawgy.png";
import cbn from "./assets/images/clients/cbn.png";
import may99 from "./assets/images/clients/may99.png";
import pcn from "./assets/images/clients/pcn.png";
import primex from "./assets/images/clients/primex.png";
import spe from "./assets/images/clients/spe.png";
import about1 from "./assets/images/icons/about1.webp";
import about2 from "./assets/images/icons/about2.webp";
import about3 from "./assets/images/icons/about3.webp";
import blog1 from "./assets/images/blog-01-330x330.webp";
import image from "./assets/images/mitech-home-infotechno-box-large-image-02-330x330.webp";
import image3 from "./assets/images/mitech-home-infotechno-box-large-image-03-330x330.webp";
import sol1 from "./assets/images/solutions/sol1.webp";
import sol2 from "./assets/images/solutions/sol2.webp";
import sol3 from "./assets/images/solutions/sol3.webp";
import sol4 from "./assets/images/solutions/sol4.webp";
import sol5 from "./assets/images/solutions/sol5.webp";
import sol6 from "./assets/images/solutions/sol6.webp";

export const navs = [
  {
    id: 1,
    page: "IT Solutions",
    text: "IT Solutions",
    links: [
      { label: "IT Services", url: "/it-services", id: 100 },
      { label: "Managed IT Services", url: "/managed-it", id: 101 },
      { label: "Industries", url: "/industries", id: 102 },
      { label: "Business Solution", url: "/business", id: 103 },
    ],
  },
  {
    id: 2,
    page: "Support",
    text: "Support",
    links: [{ label: "FAQs", url: "/faqs", id: 104 }],
  },
  {
    id: 3,
    page: "Company",
    text: "Company",
    links: [
      { label: "About Us", url: "/about", id: 105 },
      { label: "Contact Us", url: "/contact", id: 106 },
      { label: "Why choose Us", url: "/choose-us", id: 107 },
    ],
  },
];

export const homeCard = [
  {
    header: "IT Design",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
    image: homeBlue1,
    hoverImage: homeWhite1,
  },
  {
    header: "IT Management",
    body: "It’s possible to simultaneously manage and transform information from one server to another.",
    footer: "TechMyBrand",
    image: homeBlue2,
    hoverImage: homeWhite2,
  },
  {
    header: "Data Security",
    body: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
    footer: "TechMyBrand",
    image: homeBlue3,
    hoverImage: homeWhite3,
  },
];

export const industries = [
  {
    title: "IT Design",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "IT Management",
    body: "It’s possible to simultaneously manage and transform information from one server to another",
    footer: "TechMyBrand",
  },
  {
    title: "Data Security",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "Business Reform",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "Infrastructure Plan",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "Firewall Advance",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "Desktop Computing",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
  {
    title: "Software Engineering",
    body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    footer: "TechMyBrand",
  },
];

export const testimonials = [
  {
    image: courage,
    name: "Courage",
    company: "New Jerusalem Pictures",
    testimony:
      "I've worked with a lot of IT companies on a lot of projects, TechMyBrand is one of the most impressive to me.",
  },
  {
    image: confidence,
    name: "Confidence",
    company: "Primex",
    testimony:
      "Techmybrand delievered a large project in a very short period. They also provided free post-deployment support.",
  },
  {
    image: fortune,
    name: "Fortune",
    company: "Analawgy Magazine",
    testimony:
      "Techmybrand took our barely formed idea and turned it into an amazing product. The entire process was smooth and fast.",
  },
];

export const ITLongCard = [
  {
    icon: "fal fa-life-ring",
    title: "Quality Assurance System",
    content:
      "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management",
  },
  {
    icon: "fal fa-lock-alt",
    title: "Accurate Testing Processes",
    content:
      "Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
  },
  {
    icon: "fal fa-globe",
    title: "Smart API Generation",
    content:
      "Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
  },
  {
    icon: "fal fa-medal",
    title: "Infrastructure Integration Technology",
    content:
      "At TechMyBrand, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
  },
];

export const clients = [
  {
    name: "primex",
    image: primex,
  },
  {
    name: "analawgy",
    image: analawgy,
  },
  {
    name: "cbn",
    image: cbn,
  },
  {
    name: "may99",
    image: may99,
  },
  {
    name: "spe",
    image: spe,
    size: "spe-width",
  },
  {
    name: "pcn",
    image: pcn,
    size: "pcn-width",
  },
];

export const socials = [
  {
    url: "https://twitter.com/",
    label: "Twitter",
    style: "fa-twitter",
  },
  {
    url: "https://facebook.com/",
    label: "Facebook",
    style: "fa-facebook",
  },
  {
    url: "https://instagram.com/",
    label: "Instagram",
    style: "fa-instagram",
  },
  {
    url: "https://linkedin.com/",
    label: "Linkedin",
    style: "fa-linkedin",
  },
];

export const aboutCards = [
  {
    image: about1,
    heading: "What we can do?",
    body: "We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.",
    footer: "TechMyBrand",
  },
  {
    image: about2,
    heading: "Become out partners?",
    body: "Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.",
    footer: "TechMyBrand",
  },
  {
    image: about3,
    heading: "Need a hand?",
    body: "Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.",
    footer: "TechMyBrand",
  },
];

export const solutions = [
  {
    image: sol1,
    title: "Warranty Management IT",
    body: "Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management.",
  },
  {
    image: sol2,
    title: "Quality Control System",
    body: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
  {
    image: sol5,
    title: "Highly Professional Staffs",
    body: "Having obtained the official & formal training in IT technology and technical fields, our staffs know more than what they show.",
  },
  {
    image: sol4,
    title: "Product Engineering & Services",
    body: "Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
  },
  {
    image: sol3,
    title: "Infrastructure Integration Technology",
    body: "At TechMyBrand, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
  },
  {
    image: sol6,
    title: "Information Security Management",
    body: "Information security has been a rising issue lately due to a series of scandals from big companies, rest assured, we're here.",
  },
];

export const chooseUs = [
  {
    image: blog1,
    title: "TechMyBrand Management Systems",
    url: "/about",
    text: "Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.",
  },
  {
    image: image,
    title: "Efficient Database Security",
    url: "/about",
    text: "Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.",
  },
  {
    image: image3,
    title: "Reliable Multi-function Technology",
    url: "/about",
    text: "Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.",
  },
];
