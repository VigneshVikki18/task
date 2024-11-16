import React from 'react';

const Navbar = ({ cartCount, openCart }) => (
    <nav className="navbar">
        <h1>Vicky Store</h1>
        <button className="cart-button" onClick={openCart}>
            Cart ({cartCount})
        </button>
    </nav>
);

export default Navbar;
