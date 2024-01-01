import { about } from "../assets/images";
import { IoMdCheckmark } from "react-icons/io";

import Button from "./Button";

const About = () => {
  return (
    <section
      id="about-us"
      className="container flex flex-col gap-10 md:flex-row"
    >
      <div className="flex-1">
        <img src={about} alt="about" className="rounded-lg" />
      </div>
      <div className="flex-1">
        <h2 className="sec-title">
          Great <span className="text-secondaryColor">FOOD</span> Comes First
        </h2>
        <div className="seperator"></div>
        <p className="para text-justify">
          Our restaurants are known for serving high-quality, great tasting, and
          affordable food. Founded in 1947, BURGER is the second largest food
          hamburger chain in the world with about 18,000 restaurants operating
          in more than 100 countries and US territories as at May 29, 2019. The
          original HOME OF THE WHOPPER, our commitment to ingredients, signature
          recipes, and end-to-end online Burger experience for milliennials is
          what has defined our brand for more that 50 years.
        </p>
        <ul className="grid grid-cols-2 py-5 space-y-1 text-xs text-white">
          <li className="py-0.5">
            <span className="text-secondaryColor">
              <IoMdCheckmark className="inline-block text-lg" />
            </span>{" "}
            Best Price
          </li>
          <li className="py-0.5">
            <span className="text-secondaryColor">
              <IoMdCheckmark className="inline-block text-lg" />
            </span>{" "}
            Fresh Ingredients
          </li>
          <li className="py-0.5">
            <span className="text-secondaryColor">
              <IoMdCheckmark className="inline-block text-lg" />
            </span>{" "}
            Signature Receipes
          </li>
          <li className="py-0.5">
            <span className="text-secondaryColor">
              <IoMdCheckmark className="inline-block text-lg" />
            </span>{" "}
            Best Service
          </li>
        </ul>
        <Button label="About Us" />
      </div>
    </section>
  );
};

export default About;
