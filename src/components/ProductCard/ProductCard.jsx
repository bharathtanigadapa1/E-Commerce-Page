import React from 'react';

function ProductCard({
    image,
    title,
    price,
    rate,
    count,
    category,
    description
}) {
    return (
        <div className="product-card">

            <div className="product-image-container">
                <img
                    src={image}
                    alt={title}
                    className="product-image"
                />
            </div>

            <div className="product-details">

                <span className="product-category">
                    {category}
                </span>

                <h2 className="product-title">
                    {title}
                </h2>

                <div className="product-rating">
                    <span className="star">★</span>
                    <span>{rate}</span>
                    <span className="rating-count">
                        ({count} ratings)
                    </span>
                </div>

                <p className="product-description">
                    {description}
                </p>

                <div className="product-bottom">
                    <span className="product-price">
                        ${price}
                    </span>

                    <button className="buy-button">
                        Add to Cart
                    </button>
                </div>

            </div>

        </div>
    );
}

export default ProductCard;