import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <h1>cart items</h1>
            </div>
            <Button>Checkout</Button>
        </div>
    )
};

export default CartDropdown;