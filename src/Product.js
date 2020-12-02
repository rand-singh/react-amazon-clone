import React from 'react'
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>11.97</strong>
                </p>
                <div className="product__rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>                
            </div>

            <img className="product__image" src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""/>

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
