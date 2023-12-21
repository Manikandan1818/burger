import {
  beverage1,
  burger1,
  burger2,
  promo1,
  promo2,
  snack1,
} from "../assets/images";

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

export const menu = [
  {
    id: 1,
    title: "Chicken Whooper",
    category: "food",
    price: 15.99,
    img: burger1,
    desc: `Our signature whooper with 7 layers between the buns`,
  },
  {
    id: 2,
    title: "Mutton Whooper",
    category: "food",
    price: 13.99,
    img: burger2,
    desc: `Taste the fiesta in our Limited Time Mexican Mutton.`,
  },
  {
    id: 3,
    title: "Boss Whooper Mutton",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `The Biggest Whooper ever, Boss Whooper with premium buns. `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
