import React from "react";
import styled from "styled-components";

export const ButtonSectionContainer = styled.div``;

const SignUpButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  fill: var(--white);
  color: var(--white);
  background-color: var(--red);
  border: solid 1px var(--red);
  border-radius: 5px;
  padding: 8px 24px;
  transition: color 0.3s ease;

  margin: 0px 6px;

  &:hover {
    color: var(--red);
    background-color: var(--white);
    border-color: var(--red);
  }
`;

const LoginButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  //background-color: var(--extra-light);
  border-radius: 5px 5px 5px 5px;
  padding: 8px 24px;
  color: ${({ active }) => (active ? "var(--text-dark)" : "var(--white)")};
  transition: color 0.3s ease;

  &:hover {
    color: var(--white);
    background-color: var(--red);
  }
`;

const ButtonSection = ({ active }) => {
  return (
    <ButtonSectionContainer>
      <LoginButton active={active}>Login</LoginButton>
      <SignUpButton>Sign Up</SignUpButton>
    </ButtonSectionContainer>
  );
};

export { ButtonSection };
