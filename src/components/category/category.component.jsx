import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { CategoriesContext } from "../../contexts/categories.context";
import BookCard from "../book-card/book-card.component";

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    

    return (
        <div className='category-page-container'>
            <h2 className='category-page-title'>{category.toUpperCase()}</h2>
            <div className='category-books-container'>
                {
                    products && products.map((product) => (
                        <BookCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Category;