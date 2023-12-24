const MenuButton = ({ value, handleClick }) => {
  return (
    <button
      className="inline-block text-sm py-2 px-6 text-center cursor-pointer rounded-lg ease-linear duration-200 text-white bg-primaryColorLight hover:opacity-75 focus:text-black focus:bg-secondaryColor"
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default MenuButton;
