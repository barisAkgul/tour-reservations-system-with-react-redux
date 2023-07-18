import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundContent = styled.div`
  text-align: center;
  margin-bottom: 200px;
`;

const NotFoundTitle = styled.h1`
  font-size: 24px;
  color: #e63946;
  margin-bottom: 16px;
`;

const NotFoundDescription = styled.p`
  font-size: 16px;
  color: #555555;
`;

const NotFoundLink = styled(Link)`
  color: #555555;
  text-decoration: underline;
  margin-top: 16px;
`;

const PageNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
        <NotFoundDescription>
          Oops! The page you are looking for could not be found.
        </NotFoundDescription>
        <NotFoundLink to="/">Go to Homepage</NotFoundLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export { PageNotFound };
