import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import './book-card.styles.scss';

const BookCard = ({product}) => {
    const { title, author, imageUrl, description, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
    return (
        <div className='book-card-container'>
            <img className='book-img'src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
            <span>£{price}</span>
            <Button onClick={addProductToCart}>ADD TO CART</Button>
        </div>
    )

}

export default BookCard;

