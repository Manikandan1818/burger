import { categories } from "../constants";
import Button from "./Button";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section
      id="category"
      className="container flex flex-col gap-6 md:flex-row"
    >
      {categories.map((item) => (
        <CategoryCard key={item.title} {...item} />
      ))}
    </section>
  );
};

export default Category;
