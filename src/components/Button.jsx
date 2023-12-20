const Button = ({ label, online }) => {
  return (
    <div
      className={`${
        online
          ? `text-primaryColor cursor-pointer`
          : `inline-block text-sm py-3 px-8 capitalize text-center cursor-pointer rounded-full ease-linear duration-200 text-black bg-secondaryColor hover:opacity-75`
      }`}
    >
      {label}
    </div>
  );
};

export default Button;
