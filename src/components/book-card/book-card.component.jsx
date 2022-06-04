import Button from '../button/button.component';
import './book-card.styles.scss';

const BookCard = ({product}) => {
    const { title, author, imageUrl, description, price, id } = product;
    return (
        <div className="book-card-container">
            <img className='book-img' src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
           
            <span>{price}</span>
            <Button>VIEW</Button>
            


        </div>
    )

}

export default BookCard;

