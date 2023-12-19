import { homeImage } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="container flex flex-col items-center gap-10">
      <div>
        <div>
          <img src={homeImage} alt="image" className="w-60" />
        </div>
        <div>
          <h1></h1>
          <div></div>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
