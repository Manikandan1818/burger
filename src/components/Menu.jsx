import MenuButton from "./MenuButton";

const Menu = () => {
  return (
    <section id="menu" className="container">
      <h2 className="sec-title">Our Best Menu</h2>
      <div className="seperator"></div>
      <p className="para">
        The original HOME OF THE WHOPPER, our commitment to ingredients,
        signature recipes, and end-to-end online Burger.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-5">
        <MenuButton label="All" active />
        <MenuButton label="Food" />
        <MenuButton label="Snacks" />
        <MenuButton label="Beverage" />
      </div>
    </section>
  );
};

export default Menu;
