import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductDetailPage from './ProductDetailPage';
import NotFoundPage from './NotFoundPage';

// Define types for better clarity (even in JS, comments help)
// type Product = {
//   id: number;
//   name: string;
//   price: string; // e.g., 'R229.00'
//   imageUrl: string;
// };

// type CartItem = Product & {
//   quantity: number;
// };


// Dummy data for our products
const dummyProducts = [
  { id: 1, name: 'Stylish Backpack', category: 'backpacks', price: 'R229.00', imageUrl: 'https://th.bing.com/th?id=OPEC.FSI4uL%2fgQ3fkeg474C474&w=248&h=248&c=17&o=5&pid=21.1', description: 'A stylish and durable backpack for all your daily needs. Features multiple compartments and a padded laptop sleeve.' },
  { id: 2, name: 'Wireless Headphones', category: 'other', price: 'R899.00', imageUrl: 'https://th.bing.com/th?id=OPEC.gR%2bt%2bonFn114DA474C474&w=300&h=300&o=5&pid=21.1', description: 'Experience crystal-clear audio with these noise-cancelling wireless headphones. Long-lasting battery and comfortable fit.' },
  { id: 3, name: 'Modern Smartwatch', category: 'other', price: 'R199.00', imageUrl: 'https://img.freepik.com/premium-photo/hightech-modern-smartwatch_1281602-6309.jpg', description: 'Stay connected with this sleek smartwatch. Track your fitness, receive notifications, and customize your watch face.' },
  { id: 4, name: 'Leather Wallet', category: 'wallets', price: 'R260.00', imageUrl: 'https://th.bing.com/th/id/OPEC.kvhIyw14syGIVA474C474?w=248&h=248&c=17&o=5&pid=21.1', description: 'A classic bifold wallet made from genuine leather. Slim, stylish, and built to last with multiple card slots.' },
  { id: 5, name: 'Classic Sunglasses', category: 'glasses', price: 'R75.00', imageUrl: 'https://th.bing.com/th/id/OPEC.zU2PhTBg64mjHQ474C474?w=248&h=248&c=17&o=5&pid=21.1', description: 'Protect your eyes with these timeless sunglasses. Featuring UV400 protection and a lightweight frame.' },
  { id: 6, name: 'Running Shoes', category: 'shoes', price: 'R497.60', imageUrl: 'https://th.bing.com/th?id=OPEC.Hrcm%2feYYGKUvdA474C474&w=248&h=248&c=17&o=5&pid=21.1', description: 'Achieve your new personal best with these comfortable and responsive running shoes. Ideal for road and trail running.' },
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
  // Cart now stores unique items with quantities
  const [cart, setCart] = useState([]); // CartItem[]
  const [category, setCategory] = useState('all');

  const addToCart = (productToAdd) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.findIndex(item => item.id === productToAdd.id);

      if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        alert(`Increased quantity of ${productToAdd.name} in cart!`);
        return updatedCart;
      } else {
        // Item not in cart, add with quantity 1
        alert(`Added ${productToAdd.name} to cart!`);
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (productId, delta) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.findIndex(item => item.id === productId);

      if (existingItemIndex === -1) {
        return currentCart; // Should not happen if called correctly
      }

      const updatedCart = [...currentCart];
      const currentQuantity = updatedCart[existingItemIndex].quantity;
      const newQuantity = currentQuantity + delta;

      if (newQuantity <= 0) {
        // Remove item if quantity drops to 0 or less
        alert(`Removed ${updatedCart[existingItemIndex].name} from cart.`);
        return updatedCart.filter(item => item.id !== productId);
      } else {
        // Update quantity
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: newQuantity
        };
        alert(`Updated quantity of ${updatedCart[existingItemIndex].name} to ${newQuantity}.`);
        return updatedCart;
      }
    });
  };

  const removeItemFromCart = (productId) => {
    setCart(currentCart => {
      const itemToRemove = currentCart.find(item => item.id === productId);
      if (itemToRemove) {
        alert(`Removed all ${itemToRemove.name} from cart.`);
      }
      return currentCart.filter(item => item.id !== productId);
    });
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('R', ''));
    return total + (price * item.quantity); // Multiply by quantity
  }, 0);

  const totalCartQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const filteredProducts = category === 'all' 
    ? dummyProducts 
    : dummyProducts.filter(product => product.category === category);

  const categories = ['all', 'shoes', 'glasses', 'backpacks', 'wallets', 'other'];

  return (
    <>
      <Header>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo src={logo} alt="logo" />
          <SiteTitle>React Store</SiteTitle>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <CartStatus>Cart: {totalCartQuantity} items</CartStatus>
        </Link>
      </Header>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage 
              products={filteredProducts} 
              onAddToCart={addToCart} 
              categories={categories}
              selectedCategory={category}
              onSelectCategory={setCategory}
            />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cartItems={cart} onUpdateQuantity={updateCartItemQuantity} onRemoveItem={removeItemFromCart} cartTotal={cartTotal} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetailPage products={dummyProducts} onAddToCart={addToCart} />} 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer>
        <CopyrightText>&copy; {new Date().getFullYear()} React Store. All Rights Reserved.</CopyrightText>
      </Footer>
    </>
  );
}

export default App;
