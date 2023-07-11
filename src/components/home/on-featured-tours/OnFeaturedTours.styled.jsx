import { Breakpoints } from "@helpers/constants/general";
import styled from "styled-components";

export const ToursContainer = styled.div`
  background-color: #fafcff;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #0d213f;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #0d213f;
  }
`;

export const Tours = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 30px 80px;
  background-color: #fafcff;
  margin: 4rem 0;
  width: 100%;

  @media (max-width: ${Breakpoints.TABLET}px) {
    padding: 30px 30px;
  }
`;
