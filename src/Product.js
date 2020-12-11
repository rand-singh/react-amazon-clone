import React from 'react'
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // send the product to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { id, title, image, price, rating }
        }); 
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i}/>
                    ))}
                </div>                
            </div>

            <img className="product__image" src={image} alt="{title}"/>

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
