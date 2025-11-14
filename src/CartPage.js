import React from 'react';
import styled from 'styled-components';

// Components for the Cart Page
const CartPageContainer = styled.div`
  padding: 1.5rem;
  min-height: 60vh; /* Ensure it takes up some space even when empty */
`;

const CartHeader = styled.h2`
  font-size: 2rem;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1.5rem;
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #666;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c; /* A shade of red */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-left: 1rem; /* Space it from the item info */

  &:hover {
    background-color: #c0392b; /* A darker red */
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
`;

const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const CheckoutButton = styled.button`
  background-color: #2ecc71; /* A shade of green */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #27ae60; /* A darker green */
  }
`;

const CartPage = ({ cartItems, onRemoveFromCart, cartTotal }) => {
    return (
        <CartPageContainer>
            <CartHeader>Your Shopping Cart</CartHeader>
            {cartItems.length === 0 ? (
                <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <CartItem key={`${item.id}-${index}`}>
                            <CartItemImage src={item.imageUrl} alt={item.name} />
                            <CartItemInfo>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>{item.price}</ProductPrice>
                            </Info>
                            <RemoveButton onClick={() => onRemoveFromCart(index)}>Remove</RemoveButton>
                        </CartItem>
                    ))}
                    <CartSummary>
                        <TotalPrice>Total: R{cartTotal.toFixed(2)}</TotalPrice>
                        <CheckoutButton onClick={() => alert('This is just a demo. No real checkout process!')}>Checkout</CheckoutButton>
                    </CartSummary>
                </>
            )}
        </CartPageContainer>
    );
};

export default CartPage;