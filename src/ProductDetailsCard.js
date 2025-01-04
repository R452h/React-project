import React from 'react';
//import productImage from './images/product1.jpeg';
import './productDetailsCard.css';
//import StarRating from './StarRating';

const ProductDetailsCard = ({ name, price, description, imageUrl, rating,reviews }) => {
  return (
    <div className="product-details-card">
      <div className="product-image">
      <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-price">{price}</div>
        <div className="product-rating">
          <span className="rating-label">Rating: </span>
          <span className="rating-value">{rating}</span>
        </div>
        <div className="product-reviews">
          <h4>Reviews</h4>
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p>{review}</p>
            </div>
          ))}
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
