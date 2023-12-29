import { FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="container">
      <div>
        <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2">
          <li className="space-y-3">
            <a href="" className="text-4xl font-oswald uppercase">
              B<span className="text-secondaryColor">ur</span>ger
            </a>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              iusto excepturi optio magnam velit repellat maiores, quis deserunt
              tempora. Labore dolorum doloremque delectus debitis cum nesciunt
              velit minus suscipit tempore?
            </p>
          </li>
          <li className="flex flex-col gap-3">
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
          <li>
            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">Address</h3>

              <p class="flex items-center gap-2 text-xs">
                <FaLocationArrow className="text-lg text-secondaryColor" />
                Madurai, Tamilnadu
              </p>
            </div>
          </li>
          <li>
            <div class="space-y-2">
              <h3 class="text-lg uppercase font-oswald">Follow us</h3>

              <p class="space-x-3 flex items-center gap-1">
                <FaFacebook className="text-lg text-secondaryColor" />
                <FaTwitter className="text-lg text-secondaryColor" />
                <FaInstagram className="text-lg text-secondaryColor" />
                <FaWhatsapp className="text-lg text-secondaryColor" />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
