import { useState } from "react";
import { menu } from "../constants";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [color, setColor] = useState("");

  const handleClick = (e) => {
    setSelectedMenu(e.target.value);
    setColor("active");
  };

  const filteredData = (menu, selectedMenu) => {
    if (
      selectedMenu === "Food" ||
      selectedMenu === "Snacks" ||
      selectedMenu === "Beverage"
    ) {
      return menu.filter(
        (item) =>
          item.category.toLocaleLowerCase() === selectedMenu.toLocaleLowerCase()
      );
    }
    return menu;
  };

  const result = filteredData(menu, selectedMenu);

  return (
    <section id="menu" className="container">
      <h2 className="sec-title">Our Best Menu</h2>
      <div className="seperator"></div>
      <p className="para">
        The original HOME OF THE WHOPPER, our commitment to ingredients,
        signature recipes, and end-to-end online Burger.
      </p>
      <div className="mt-8 mb-8 flex flex-wrap justify-center gap-5">
        <MenuButton handleClick={handleClick} value="All" />
        <MenuButton handleClick={handleClick} value="Food" />
        <MenuButton handleClick={handleClick} value="Snacks" />
        <MenuButton handleClick={handleClick} value="Beverage" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
        {result.map((item) => (
          <div key={item.id}>
            <div className="h-56 grid place-items-center rounded-3xl bg-primaryColorLight dark:bg-darkColorLight hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
              <img
                src={item.img}
                alt="menu"
                className="py-1 w-36 hover:scale-110 ease-linear duration-200 md:w-35 lg:w-24"
              />
            </div>
            <h4 className="pt-5 title">{item.title}</h4>
            <p className="para mb-2">{item.desc}</p>
            <p className="text-secondaryColor">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
