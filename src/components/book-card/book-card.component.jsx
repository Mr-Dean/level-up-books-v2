import Button from '../button/button.component';
import { useState } from 'react';
import './book-card.styles.scss';

const BookCard = ({product}) => {
    const { title, author, imageUrl, description, price } = product;
    const [toggle, setToggle] = useState({
        toggle: false,
    })

    const view = {
        width: "80%",
        height: "80%",
        textAlign: "left"
    }

    const handleClick = (event) => {
        setToggle(!toggle)
    } 

    console.log(toggle)
    return (
        <div className='book-card-container' style={!toggle ? {...view} : {width: 350} }>
            <img className='book-img' style={!toggle ? {maxHeight: 450} : {maxHeight: 300}} src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
            {
                !toggle ? <p>{description}</p> : null
            }
           
            <span>£{price}</span>
            
            <Button onClick={handleClick}>VIEW</Button>
         


        </div>
    )

}

export default BookCard;

