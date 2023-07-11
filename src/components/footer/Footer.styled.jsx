import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  border-top: 1px solid var(--alabaster);

  width: 100vw;

  margin: auto;
  padding: 5rem 1rem;
`;

export const FooterCol = styled.div`
  padding-left: 80px;
`;

export const FooterHeading = styled.h4`
  color: var(--text-light);
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 50px;
    background-color: var(--text-light);
  }
`;

export const FooterLink = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--text-light);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--text-dark);
  }
`;
