const MenuButton = ({ value, handleClick }) => {
  return (
    <button
      className="inline-block text-sm py-2 px-6 text-center cursor-pointer rounded-lg ease-linear duration-200 text-white bg-primaryColorLight dark:bg-darkColorLight focus:text-black focus:bg-secondaryColor focus:dark:bg-secondaryColor "
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default MenuButton;
