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
        </ul>
      </div>
    </section>
  );
};

export default Footer;
