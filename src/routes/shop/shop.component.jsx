import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";





const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div>
        {Object.keys(categoriesMap).map((category) =>  <h1 key={category}>{category}</h1>
        )}
    </div>
  );
};

export default Shop;