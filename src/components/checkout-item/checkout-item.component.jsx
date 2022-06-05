import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const { imageUrl, title, price, quantity } = cartItem;
    const { addItemToCart, clearItemFromCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={title} />
            </div>
            <span className='title'>{title.substring(0, 15) + '...'}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>-</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>+</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
};

export default CheckoutItem;