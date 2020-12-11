import React from 'react'
import './CheckoutProduct.scss'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id    
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>                
                <p className="checkoutProduct__price">
                    <small>&pound;</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon key={i}/>
                            ))
                    }
                </div>

                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct
