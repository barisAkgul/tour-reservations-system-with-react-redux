// components/StepContainer.js
import React from "react";
import styled from "styled-components";

const StepContainerWrapper = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const StepContainer = ({ children, isActive }) => {
  return (
    <StepContainerWrapper isActive={isActive}>{children}</StepContainerWrapper>
  );
};

export default StepContainer;
