import { beverage1, burger1, promo1, promo2, snack1 } from "../assets/images";

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

export const promos = [
  {
    imgURL: promo1,
    title: "Get a 10% Discount on Payday week",
    text: "Double up our best selling crispy veg Burger.",
  },
  {
    imgURL: promo2,
    title: "FRIENDS and Family Combo(Save upto 20%)",
    text: "Save Rs 99 Chicken Wopper + Mid Fries + Pepsi",
  },
];
