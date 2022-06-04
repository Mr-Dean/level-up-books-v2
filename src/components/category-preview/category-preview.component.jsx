import { Link } from 'react-router-dom';

import BookCard from '../book-card/book-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({category, products}) => {
    return (
        <div className='category-preview-container'>
            
            <div className='category-header'>
                <Link style={{textDecoration: "none", color: "white"}}to={category}><h2>{category.toUpperCase()}</h2></Link>
                <span>View All</span>
            </div>
            <div className='preview'>
                {
                    products.filter((_, index) => index < 4).map((product) => <BookCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;