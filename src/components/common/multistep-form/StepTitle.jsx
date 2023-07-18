// components/StepTitle.js
import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const StepTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default StepTitle;
