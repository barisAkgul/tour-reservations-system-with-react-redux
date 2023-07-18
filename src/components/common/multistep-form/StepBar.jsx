// components/StepBar.js
import React from "react";
import styled from "styled-components";
import { FiFolder } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlinePayment, MdDone } from "react-icons/md";

const stepIcons = [
  <FiFolder />,
  <BsFillPersonFill />,
  <MdOutlinePayment />,
  <MdDone />,
];

const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${({ isActive, isClickable }) =>
    isActive && isClickable ? "pointer" : "default"};
`;

const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid ${({ isActive }) => (isActive ? "#fff" : "var(--red)")};
  background-color: ${({ isActive }) => (isActive ? "var(--red)" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "var(--red)")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 1.5rem;
`;

const StepLine = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--red)" : "lightgrey"};
`;

const StepBar = ({ totalSteps, currentStep, onClick, isFormEmpty }) => {
  return (
    <StepBarContainer>
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <Step
            isActive={index + 1 <= currentStep}
            isClickable={index + 1 !== currentStep}
            onClick={() => onClick(index + 1)}
          >
            <StepNumber isActive={index + 1 <= currentStep}>
              {stepIcons[index]}
            </StepNumber>
            {index !== totalSteps - 1 && (
              <StepLine isActive={index + 1 < currentStep} />
            )}
          </Step>
          {index !== totalSteps - 1 && (
            <StepLine isActive={index + 1 < currentStep} />
          )}
        </React.Fragment>
      ))}
    </StepBarContainer>
  );
};

export default StepBar;
