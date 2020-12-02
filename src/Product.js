import React from 'react'
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';

function Product({ title, image, price, rating }) {
    console.log(rating);
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

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
