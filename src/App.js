import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './HomePage';
import CartPage from './CartPage';

// Dummy data for our products
const dummyProducts = [
  { id: 1, name: 'Stylish Backpack', price: 'R229.00', imageUrl: 'https://th.bing.com/th?id=OPEC.FSI4uL%2fgQ3fkeg474C474&w=248&h=248&c=17&o=5&pid=21.1' },
  { id: 2, name: 'Wireless Headphones', price: 'R899.00', imageUrl: 'https://th.bing.com/th?id=OPEC.gR%2bt%2bonFn114DA474C474&w=300&h=300&o=5&pid=21.1' },
  { id: 3, name: 'Modern Smartwatch', price: 'R199.00', imageUrl: 'https://img.freepik.com/premium-photo/hightech-modern-smartwatch_1281602-6309.jpg' },
  { id: 4, name: 'Leather Wallet', price: 'R260.00', imageUrl: 'https://th.bing.com/th/id/OPEC.kvhIyw14syGIVA474C474?w=248&h=248&c=17&o=5&pid=21.1' },
  { id: 5, name: 'Classic Sunglasses', price: 'R75.00', imageUrl: 'https://th.bing.com/th/id/OPEC.zU2PhTBg64mjHQ474C474?w=248&h=248&c=17&o=5&pid=21.1' },
  { id: 6, name: 'Running Shoes', price: 'R497.60', imageUrl: 'https://th.bing.com/th?id=OPEC.Hrcm%2feYYGKUvdA474C474&w=248&h=248&c=17&o=5&pid=21.1' },
];

// Header component
const Header = styled.header`
  background-color: #282c34;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* To space out title and cart status */
  color: white;
`;

const Logo = styled.img`
  height: 40px;
  pointer-events: none;
  margin-right: 1rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SiteTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #61dafb; /* React blue */ 
`;

const CartStatus = styled.div`
  font-size: 1.1rem;
`;

// Footer component
const Footer = styled.footer`
  background-color: #282c34;
  padding: 1.5rem;
  text-align: center;
`;

const CopyrightText = styled.p`
  margin: 0;
  color: #a0a0a0;
  font-size: 0.9rem;
`;

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    // For now, we'll just add the product to the array.
    // A more advanced cart would check for duplicates and update quantity.
    setCart(currentCart => [...currentCart, productToAdd]);
    alert(`Added ${productToAdd.name} to cart!`);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(currentCart => currentCart.filter((_, index) => index !== indexToRemove));
    alert('Item removed from cart.');
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('R', ''));
    return total + price;
  }, 0);

  return (
    <>
      <Header>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo src={logo} alt="logo" />
          <SiteTitle>React Store</SiteTitle>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <CartStatus>Cart: {cart.length} items</CartStatus>
        </Link>
      </Header>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage products={dummyProducts} onAddToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cartItems={cart} onRemoveFromCart={removeFromCart} cartTotal={cartTotal} />} 
          />
        </Routes>
      </main>
      <Footer>
        <CopyrightText>&copy; {new Date().getFullYear()} React Store. All Rights Reserved.</CopyrightText>
      </Footer>
    </>
  );
}

export default App;
