import { beverage1, burger1, snack1 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#review", label: "Review" },
  { href: "#contact-us", label: "Contact Us" },
];

export const categories = [
  {
    imgURL: burger1,
    title: "food",
    text: "Crispy chicken patty burger, our best seller",
    bgColor: "bg-secondaryColor",
  },
  {
    imgURL: snack1,
    title: "Snack",
    text: "Crispy fries with peri peri spice.",
    bgColor: "bg-redColor",
  },
  {
    imgURL: beverage1,
    title: "Beverage",
    text: "Our signature mango thick shake.",
    bgColor: "bg-greenColor",
  },
];
