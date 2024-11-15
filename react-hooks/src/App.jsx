import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Fetch products from the Fake Store API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Add item to the cart
    const addToCart = (product) => {
        const existsInCart = cart.some(item => item.id === product.id);
        if (existsInCart) {
            alert('Item already added to the cart');
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove item from the cart
    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <div className="App">
            <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
            <ProductList products={products} addToCart={addToCart} />
            {isCartOpen && (
                <CartModal 
                    cart={cart} 
                    closeCart={() => setIsCartOpen(false)} 
                    removeFromCart={removeFromCart} 
                />
            )}
        </div>
    );
};

export default App;
