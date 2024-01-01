import { FaHamburger } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";

import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const Nav = () => {
  const [open, setIsOpen] = useState(true);
  const [border, setBorder] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleOpenClick = () => {
    setIsOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 40) {
        setBorder(true);
      } else {
        setBorder(false);
      }
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "light");
    }
  };

  return (
    <header
      className={`fixed bg-primaryColor dark:bg-darkColor top-0 left-0 z-10 w-full ${
        border && `border-b border-secondaryColor`
      }`}
    >
      <nav className="container relative h-14 flex justify-between items-center">
        <div className="text-2xl">
          <a href="/" className="font-oswald uppercase leading-normal">
            B{" "}
            <FaHamburger className="inline-block text-secondaryColor text-2xl align-baseline" />{" "}
            rger
          </a>
        </div>
        <div
          className={`${
            open
              ? `sm:hidden md:block static py-0 border-none w-auto ml-auto`
              : `absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor`
          }`}
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
                onClick={!open && handleOpenClick}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <IoClose
            onClick={!open && handleOpenClick}
            className={`${
              open
                ? `md:hidden`
                : `absolute top-[0.7rem] right-4 text-2xl cursor-pointer hover:text-secondaryColor`
            }`}
          />
        </div>
        <div className="flex items-center gap-5 ml-4 text-xl cursor-pointer">
          <button onClick={handleTheme}>
            {theme === "dark" ? <IoMdSunny /> : <IoMdMoon />}
          </button>
          <GiHamburgerMenu className="md:hidden" onClick={handleOpenClick} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
