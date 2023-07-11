import styled from "styled-components";

export const TripCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
`;

export const TripImage = styled.img``;

export const TripDetails = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  background-color: var(--extra-light);
  cursor: pointer;
`;

export const TripTitle = styled.p``;

export const TripCity = styled.p`
  display: flex;
  font-size: 14px;
  align-items: center;
  gap: 4px;
  font-weight: 100;
`;

export const Rating = styled.div`
  color: goldenrod;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--text-light);
  }
`;

export const Price = styled.div``;

export const PriceTag = styled.span``;

export const BookNowButton = styled.button`
  transition: all 0.3s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: var(--red);
  color: var(--white);
  font-size: 16px;
  line-height: 1.5;
  padding: 4px 20px;
  text-transform: none;
  font-weight: 600;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--red);
    background-color: var(--white);
    color: var(--red);
  }
};
`;
