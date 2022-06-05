import { Link } from 'react-router-dom';
import './our-mission.styles.scss';

import Button from '../../components/button/button.component';
import rocket from '../../assets/blastoff.png';


const OurMissionPage = () => ( 
    <div className='mission-page'>
        <img src={rocket} alt='rocket logo' />
        
        <h1>Our Mission</h1>
        <p>We at Level Up Bookstore are passionate about self development. 
        Books can offer us a wealth of experience and knowledge by experts who have dedicated their life to particular fields of expertise. 
        These authors have graciously offered the culmination of their wisdom and decided to share it with you.</p>
        <p>Our mission is to help you navigate the often endless choices of self development books, with our curated selection of only the best and most impactful pieces of work.</p>
        <p>
        Every book in our store has beeen throughly researched and vetted by the public. Every book has no less than 5 star reviews.</p>
        <p>We guarantee that your perspective on everything from finance to business to relationships will change for the better.</p>
        <p>It's time to start learning, so you can be the best version of you.</p>
        <h3>It's time to level up!</h3>

        <Link style={{textDecoration: 'none'}}to='/shop'>
            <Button>GO TO SHOP</Button>
        </Link>
    </div>
)

export default OurMissionPage;