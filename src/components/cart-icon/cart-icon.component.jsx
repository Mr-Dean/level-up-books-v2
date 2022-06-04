import './cart-icon.styles.scss';
import icon from '../../assets/shopping-cart.png';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <img className='cart-icon' src={icon} alt={icon} />
        </div>
    )
}

export default CartIcon;