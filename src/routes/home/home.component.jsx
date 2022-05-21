import { Link } from "react-router-dom";
import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='text-container'>
                <h2>It's time to level up!</h2>
                <p>Specially curated book selection offering you the only the best knowledge to level up your life.<br/>
                We only stock the best of the best, to make make you better than the rest.</p>
                <Link style={{textDecoration: 'none'}} to='/shop'>
                    <button>SHOP NOW</button>
                </Link>    
            </div>
        </div>
    )
}

export default Home;