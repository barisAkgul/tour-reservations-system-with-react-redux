import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;

  position: fixed;
  z-index: 999;
  right: 0;
  left: 0;
`;

export const HeaderContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;

  height: 100%;
  width: 100%;
  padding: 20px 70px;
  color: ${({ active }) => (active ? "#444444" : "white")};
  background-color: ${({ active }) => (active ? "white" : "inherit")};
  transition: background-color 0.3s ease;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
