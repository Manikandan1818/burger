import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-secondaryColor flex flex-col gap-5 md:items-center md:flex-row"
    >
      <div className="container">
        <div className="space-y-4 md:flex-1">
          <h2 className="sec-title text-black">GET EXCLUSIVE OFFER</h2>
          <p className="text-sm text-black">
            Sign up from Updates & NewsLetter
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:flex-1 mt-4">
          <input
            type="email"
            placeholder="subscribe@burger.com"
            className="p-2 text-black rounded-lg text-sm outline-none w-full"
          />
          <a className="flex items-center justify-center gap-2 bg-black p-2 cursor-pointer hover:opacity-75">
            <FaPaperPlane /> Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
