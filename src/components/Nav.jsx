import { FaHamburger, FaMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [open, setIsOpen] = useState(true);

  const handleOpenClick = () => {
    setIsOpen(!open);
  };

  return (
    <header className="fixed top-0 left-0 z-10 py-8 w-full">
      <nav className="container relative h-14 flex justify-between items-center">
        <div className="text-2xl">
          <a href="/" className="uppercase">
            Bur
            <span className="text-secondaryColor font-oswald"> ger</span>
          </a>
        </div>
        <div
          className={`${
            open
              ? `sm:hidden md:block static py-0 border-none w-auto ml-auto`
              : `absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor`
          }`}
          onClick={!open && handleOpenClick}
        >
          <ul
            className={`${
              open
                ? `flex flex-row text-center gap-5`
                : `flex flex-col text-center gap-5`
            }`}
          >
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="hover:text-secondaryColor ease-in duration-100"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <IoClose
            className={`${
              open
                ? `md:hidden`
                : `absolute top-[-0.7rem] right-4 text-2xl cursor-pointer hover:text-secondaryColor`
            }`}
          />
        </div>

        <div className="flex items-center gap-5 ml-4 text-xl cursor-pointer">
          <FaMoon />
          <FaHamburger className="md:hidden" onClick={handleOpenClick} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
