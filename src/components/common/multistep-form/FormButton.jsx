// components/FormButton.js
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const FormButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default FormButton;
