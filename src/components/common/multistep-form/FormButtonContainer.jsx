// components/FormButtonContainer.js
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const FormButtonContainer = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default FormButtonContainer;
