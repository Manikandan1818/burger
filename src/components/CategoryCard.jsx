import Button from "./Button";

const CategoryCard = ({ imgURL, title, text, bgColor }) => {
  return (
    <div
      className={`flex py-3 rounded-lg overflow-hidden md:flex-1 ${bgColor}`}
    >
      <div className="basis-1/3 relative">
        <img
          src={imgURL}
          alt="image"
          className="absolute w-30 -bottom-4 -left-4"
        />
      </div>
      <div className="flex-col">
        <h3 className="title">{title}</h3>
        <p className="text-sm mb-1">{text}</p>
        <Button label="Buy Online" online />
      </div>
    </div>
  );
};

export default CategoryCard;
