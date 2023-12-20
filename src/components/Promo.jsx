import { promos } from "../constants";

const Promo = () => {
  return (
    <section
      id="promo"
      className="container flex flex-col gap-5 lg:gap-10 lg:flex-row"
    >
      {promos.map((promo) => (
        <div
          key={promo.title}
          className="bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1"
        >
          <img
            src={promo.imgURL}
            alt="promo img"
            className="w-44 mx-auto hover:animate-movingY md:mx-3"
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday Promo</p>
            <h3 className="title">{promo.title}</h3>
            <p className="para">{promo.text}</p>
            <a href="#" className="text-xs text-secondaryColor cursor-pointer">
              Buy Online
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Promo;
