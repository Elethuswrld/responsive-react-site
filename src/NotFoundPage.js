import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #e74c3c; /* A shade of red */
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0 2rem 0;
`;

const HomeLink = styled(Link)`
  background-color: #282c34;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #61dafb; /* React blue */
  }
`;

const NotFoundPage = () => {
    return (
        <NotFoundContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Oops! The page you're looking for doesn't exist.</ErrorMessage>
            <HomeLink to="/">Go Back to Home</HomeLink>
        </NotFoundContainer>
    );
};

export default NotFoundPage;