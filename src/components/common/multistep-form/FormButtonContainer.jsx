// components/FormButtonContainer.js
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const FormButtonContainer = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default FormButtonContainer;
