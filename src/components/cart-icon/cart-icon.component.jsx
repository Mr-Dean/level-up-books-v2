import './cart-icon.styles.scss';

import icon from '../../assets/shopping-cart.png';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <img className='cart-icon' src={icon} alt={icon} />
        </div>
    )
}

export default CartIcon;