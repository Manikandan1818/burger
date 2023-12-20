import { homeImage } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="container flex flex-col items-center gap-10">
      <div>
        <div>
          <img src={homeImage} alt="image" />
        </div>
        <div>
          <h1>
            INDIA&rsquo;S LARGEST HOME-GROWN BURGER CHAIN IS HERE TO SERVE YOU.
          </h1>
          <div></div>
          <p>
            We know your&rsquo;e obviously a fan of desi flavours and have your
            heart set on it. Your search for the best Indian fusion burgers ends
            here. With the taste of India in every bite, we have thoughtfully
            curated our menu to serve the Indian palette. Bursting with
            flavours, our wide range of burgers will always make you crave for
            more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
