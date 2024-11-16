import React from 'react';

const CartModal = ({ cart, closeCart, removeFromCart }) => (
    <div className="cart-modal">
        <button className="close-button" onClick={closeCart}>Close</button>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <ul className="cart-list">
                {cart.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price} x {item.quantity}</p>
                        </div>
                        <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default CartModal;
