import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/checkout');
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Button onClick={clickHandler}>Checkout</Button>
        </div>
    )
};

export default CartDropdown;