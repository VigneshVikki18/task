import React from 'react';

const ProductCard = ({ product, addToCart }) => (
    <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <button  className='add-button'onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
);

export default ProductCard;
