import './cart-icon.styles.scss';
import icon from '../../assets/shopping-cart.png';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

    console.log(cartCount)

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <img className='cart-icon' src={icon} alt={icon} />
            <div className='count'><span>{cartCount}</span></div>
            
        </div>
    )
}

export default CartIcon;