const MenuButton = ({ label, active }) => {
  return (
    <div
      className={`inline-block text-sm py-2 px-6 text-center cursor-pointer rounded-lg ease-linear duration-200  ${
        active
          ? `text-black bg-secondaryColor`
          : ` text-white bg-primaryColorLight`
      }
      hover:opacity-75`}
    >
      {label}
    </div>
  );
};

export default MenuButton;
