import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/levelup.png';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import './navigation.styles.scss';

const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img className='logo' src={logo} alt='logo'/>   
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/our-mission'>
                        OUR MISSION
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;