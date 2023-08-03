import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 3rem 1.5rem;
  text-align: center;
`;

export const ErrorContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #fed7d7;
  color: #c53030;
  max-width: 28rem;
  margin: auto;
`;

export const LoadingContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  color: #6b7280;
  max-width: 28rem;
  margin: auto;
`;

export const SuccessContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  max-width: 36rem;
  margin: auto;
`;

export const SuccessTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #34d399;

  span {
    color: black;
  }
`;

export const SuccessText = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: #6b7280;
`;

export const HomePageLink = styled(Link)`
  text-decoration: none;
  color: #34d399;
  font-size: 1.2rem;
  margin-top: 1rem;
  display: inline-block;
  border: 2px solid #34d399;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #34d399;
    color: white;
  }
`;
