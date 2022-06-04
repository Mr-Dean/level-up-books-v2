import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";





const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div>
        {Object.keys(categoriesMap).map((category) =>  {
        const products = categoriesMap[category];
        return <CategoryPreview key={category} category={category} products={products} />
       
    })
        }
    </div>
  );
};

export default Shop;