import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    <>
      {scrollTop && (
        <button
          className="fixed -bottom-0 right-5 rounded-full bg-secondaryColor text-primaryColor p-2 text-lg shadow-md hover:-translate-y-1 ease-in duration-200"
          onClick={bottomToTop}
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </>
  );
};

export default Scroll;
