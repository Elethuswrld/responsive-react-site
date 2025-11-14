import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundPage from './NotFoundPage';

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%; /* Creates a square aspect ratio box */
  position: relative;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  color: #666;
  margin: 0 0 1.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const AddToCartButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  align-self: flex-start; /* Don't stretch the button */

  &:hover {
    background-color: #27ae60;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 2rem 2rem 0 2rem;
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductDetailPage = ({ products, onAddToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <>
            <BackLink to="/">&larr; Back to all products</BackLink>
            <DetailContainer>
                <ImageContainer>
                    <ProductImage src={product.imageUrl} alt={product.name} />
                </ImageContainer>
                <InfoContainer>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductDescription>{product.description}</ProductDescription>
                    <AddToCartButton onClick={() => onAddToCart(product)}>Add to Cart</AddToCartButton>
                </InfoContainer>
            </DetailContainer>
        </>
    );
};

export default ProductDetailPage;