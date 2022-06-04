import { Routes, Route } from 'react-router-dom';
import CategoryShowcase from '../../components/category-showcase/category-showcase.component';
import Category from '../../components/category/category.component';


const Shop = () => {
  return (
    <Routes>
        <Route index element={<CategoryShowcase />} />
        <Route path=":category" element={<Category />} />
        
    </Routes>
  );
};

export default Shop;