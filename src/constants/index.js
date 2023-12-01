import {
  facebook,
  instagram,
  loveToHelp,
  secure,
  starStruck,
  twitter,
} from "../assets/icons";
import {
  americanFood,
  asianFood,
  coffeeShops,
  customer1,
  customer2,
  italianFood,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const kitchens = [
  {
    bigShoe: asianFood,
  },
  {
    bigShoe: americanFood,
  },
  {
    bigShoe: italianFood,
  },
];

export const statistics = [
  { value: "500+", label: "Restaurants" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: asianFood,
    name: "Asian",
    price: "$200.20",
  },
  {
    imgURL: americanFood,
    name: "American",
    price: "$210.20",
  },
  {
    imgURL: italianFood,
    name: "Italian Food",
    price: "$220.20",
  },
  {
    imgURL: coffeeShops,
    name: "Coffee Shops",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: starStruck,
    label: "Effortless Reservations",
    subtext:
      "Reserve your spot hassle-free with Bookify's user-friendly platform.",
  },
  {
    imgURL: secure,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: loveToHelp,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Patrick Star 🌟",
    rating: 4.5,
    feedback:
      "Uhhh, yeah, so I usually just nap under a rock, but when I needed a reservation for the Ice Cream Kingdom, Bookify was there, making it all fancy-like.\n" +
      "\n",
  },
  {
    imgURL: customer2,
    customerName: "Mr Krabs 🦀",
    rating: 5.0,
    feedback:
      "Five stars, aye! ⭐⭐⭐⭐⭐ I'll be returnin' for more reservations and, hopefully, more customers fillin' the tables at the Krusty Krab! Bookify gets the Krabs seal of approval!\"\n" +
      "\n",
  },
];

export const footerLinks = [
  {
    title: "Kitchens",
    links: [
      { name: "American", link: "/" },
      { name: "Italian", link: "/" },
      { name: "Asian", link: "/" },
      { name: "Coffee Shops", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@bookify.com", link: "mailto:customer@bookify.com" },
      { name: "+123456789", link: "tel:+123456789" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
