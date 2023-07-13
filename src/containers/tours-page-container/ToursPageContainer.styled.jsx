import { FilterContainer } from "@components/common/filter-section/FilterSection.styled";
import styled from "styled-components";

export const ToursPageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${FilterContainer} {
    margin-top: -30px;
    box-shadow: 10px 2px 40px rgba(0, 0, 0, 0.14);

    &::before {
      display: none;
    }
  }
`;

export const TopSection = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #1a1a3d;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  position: relative;

  img {
    width: 100vw;
    height: 100%;
    opacity: 0.5;
  }

  .top-section-header {
    position: absolute;
    color: white;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 44px;
  }
`;

export const Tours = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const ToursContainer = styled.div`
  padding: 30px 100px;
  background-color: #fafcff;
  margin: 4rem 0;
  width: 100%;

  h2 {
    font-size: 32px;
    line-height: 1.1;
    color: #111b19;
    letter-spacing: -1px;
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
    padding-bottom: 8px;
  }
`;
