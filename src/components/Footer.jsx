import {
  FaArrowAltCircleUp,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact-us" className="container">
      <div>
        <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
          <li className="space-y-3">
            <a href="" className="text-4xl font-oswald uppercase">
              B<span className="text-secondaryColor">ur</span>ger
            </a>
            <p className="text-xs text-justify">
              We know you’re obviously a fan of desi flavours and have your
              heart set on it. Your search for the best Indian fusion burgers
              ends here. With the taste of India in every bite, we have
              thoughtfully curated our menu to serve the Indian palette.
              Bursting with flavours, our wide range of burgers will always make
              you crave for more.
            </p>
          </li>
          <li>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg uppercase font-oswald">SUpport</h3>
              <a href="" className="text-xs hover:text-secondaryColor">
                FAQ's
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Privacy Policy
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Terms and Conditions
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Contact
              </a>
            </div>
          </li>
          <li class="space-y-8">
            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">phone</h3>

              <p class="flex items-center gap-2 text-xs">
                <FaPhoneAlt className="text-lg text-secondaryColor" />
                +91 9500738030
              </p>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">email</h3>

              <p class="flex items-center gap-2 text-xs">
                <MdEmail className="text-lg text-secondaryColor" />
                burger.info@email.com
              </p>
            </div>
          </li>
          <li className="space-y-8">
            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">Address</h3>

              <p class="flex items-center gap-2 text-xs">
                <FaLocationArrow className="text-lg text-secondaryColor" />
                Madurai, Tamilnadu
              </p>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">Follow us</h3>
              <p class="space-x-3 flex items-center gap-2">
                <FaFacebook className="text-lg text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-200" />
                <FaTwitter className="text-lg text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-200" />
                <FaInstagram className="text-lg text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-200" />
                <FaWhatsapp className="text-lg text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-200" />
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center border-t border-primaryColorLight md:flex-row justify-between py-5">
        <p className="para">Burger Template developed by Manikandan</p>
        <p className="para">Copyright © 2024. All rights Reserved </p>
      </div>
    </section>
  );
};

export default Footer;
