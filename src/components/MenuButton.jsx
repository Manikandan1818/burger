const MenuButton = ({ value, active, handleClick }) => {
  return (
    <button
      className={`inline-block text-sm py-2 px-6 text-center cursor-pointer rounded-lg ease-linear duration-200  ${
        active
          ? `text-black bg-secondaryColor`
          : ` text-white bg-primaryColorLight`
      }
      hover:opacity-75`}
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default MenuButton;
