import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex: 1;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const SummaryLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;
