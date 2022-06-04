import { Link } from 'react-router-dom';

import BookCard from '../book-card/book-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({category, products}) => {
    return (
        <div className='category-preview-container'>
            <h2 className='category-header'>
                {category.toUpperCase()}
                
            </h2>
            <div className='preview'>
                {
                    products.filter((_, index) => index < 4).map((product) => <BookCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;