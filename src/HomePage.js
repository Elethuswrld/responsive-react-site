import React from 'react';
import styled from 'styled-components';

// Grid container for the products
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 column on mobile */
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f0f0f0;

  /* 2 columns on tablets */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 3 columns on desktops */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Card for a single product
const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures the image corners are rounded */
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 1; /* Allows this area to grow and push the button down */
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

const AddToCartButton = styled.button`
  background-color: #282c34;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  margin: 1rem; /* Use margin to create space from the info content */
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #61dafb;
  }
`;

const HomePage = ({ products, onAddToCart }) => {
    return (
        <ProductGrid>
            {products.map(product => (
                <ProductCard key={product.id}>
                    <ProductImage src={product.imageUrl} alt={product.name} />
                    <ProductInfo>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>{product.price}</ProductPrice>
                    </ProductInfo>
                    <AddToCartButton onClick={() => onAddToCart(product)}>Add to Cart</AddToCartButton>
                </ProductCard>
            ))}
        </ProductGrid>
    );
};

export default HomePage;