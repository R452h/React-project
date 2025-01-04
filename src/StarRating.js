import React from 'react';

const StarRating = ({ rating }) => {
  const getStarIcons = () => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const starIcons = [];

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<i key={i} className="fas fa-star"></i>);
    }

    for (let i = 0; i < halfStars; i++) {
      starIcons.push(<i key={fullStars + i} className="fas fa-star-half-alt"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(<i key={fullStars + halfStars + i} className="far fa-star"></i>);
    }

    return starIcons;
  };

  return <div className="star-rating">{getStarIcons()}</div>;
};

export default StarRating;
