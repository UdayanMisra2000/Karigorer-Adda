import React from 'react'
import './Product.css'
import { Button } from 'react-bootstrap'
import { useStateValue } from '../Body/Checkout/StateProvider';

export default function Product({id, title, price, rating, image}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
    return (
        <div className ="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>Rs</strong>
                    <strong> {price}</strong>
                    </p>
                <div className="product_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src= {image}/>
            <Button onClick={addToBasket} variant="warning">Add to Cart</Button>
        </div>
    )
}
