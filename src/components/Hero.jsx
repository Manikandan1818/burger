import { homeImage } from "../assets/images";
import { FaUtensils } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaEnvira } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <img src={homeImage} alt="image" className="w-60 md:w-72" />
        </div>
        <div className="text-center md:basis-1/2 lg:basis-3/5 md:text-start">
          <h1 className="app-title">
            INDIA&rsquo;S Largest B
            <span className="text-secondaryColor">UR</span>
            GER IS HERE.
          </h1>
          <div className="seperator mx-auto md:mx-0"></div>
          <p className="para">
            We know your&rsquo;e obviously a fan of desi flavours and have your
            heart set on it. Your search for the best Indian fusion burgers ends
            here. With the taste of India in every bite, we have thoughtfully
            curated our menu to serve the Indian palette. Bursting with
            flavours, our wide range of burgers will always make you crave for
            more.
          </p>{" "}
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="flex-col flex justify-center items-center">
              <FaUtensils className="text-secondaryColor text-3xl" />
              <br />
              Delicious
            </div>
            <div className="flex-col flex justify-center items-center">
              <FaDroplet className="text-secondaryColor text-3xl" />
              <br />
              Fresh
            </div>
            <div className="flex-col flex justify-center items-center">
              <FaEnvira className="text-secondaryColor text-3xl" />
              <br />
              Organic
            </div>
          </div>
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
