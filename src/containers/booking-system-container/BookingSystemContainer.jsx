import React, { useState } from "react";
import styled from "styled-components";

import FormButtonContainer from "@components/common/multistep-form/FormButtonContainer";
import StepBar from "@components/common/multistep-form/StepBar";
import StepContainer from "@components/common/multistep-form/StepContainer";
import FormButton from "@components/common/multistep-form/FormButton";
import StepTitle from "@components/common/multistep-form/StepTitle";

import { PersonalInfo } from "@components/booking-system/personal-info/PersonalInfo";
import { CreditCardForm } from "@components/booking-system/payment-section/CreditCardForm";
import { SelectRoom } from "@components/booking-system/select-room/SelectRoom";
import { ResultSection } from "@components/booking-system/result-section/ResultSection";
import { Summary } from "@components/booking-system/summary/Summary";
import { useSelector } from "react-redux";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;

  max-width: 80vw;
  min-height: 70vh;
  margin: 0 auto;
  padding: 20px;
`;

const BookingSystemContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({ roomType: "" });

  const filterStore = useSelector((state) => state.filter);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNextStep = () => {
    if (!isFormEmpty) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const isFormEmpty = currentStep == 1 && formValues.roomType == "";
  return (
    <AppContainer>
      <StepBar
        totalSteps={4}
        currentStep={currentStep}
        onClick={setCurrentStep}
        isFormEmpty={isFormEmpty}
      />
      <div>
        <StepContainer isActive={currentStep === 1}>
          <StepTitle title="Step 1: Select Room" />
          <SelectRoom handleInputChange={handleInputChange} />
        </StepContainer>
        <StepContainer isActive={currentStep === 2}>
          <StepTitle title="Step 2: Address Information" />
          <PersonalInfo
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        </StepContainer>
        <StepContainer isActive={currentStep === 3}>
          <StepTitle title="Step 3: Payment Information" />
          <Summary />
          <CreditCardForm handleNextStep={handleNextStep} />
        </StepContainer>
        <StepContainer isActive={currentStep === 4}>
          <StepTitle title="Step 4: Result Information" />
          <ResultSection currentStep={currentStep} />
        </StepContainer>
      </div>
      <FormButtonContainer>
        {currentStep > 1 && currentStep < 4 && (
          <FormButton onClick={handlePrevStep}>Previous</FormButton>
        )}
        {currentStep < 3 && (
          <span style={{ marginLeft: "auto" }}>
            <FormButton disabled={isFormEmpty} onClick={handleNextStep}>
              Next
            </FormButton>
          </span>
        )}
      </FormButtonContainer>
    </AppContainer>
  );
};

export { BookingSystemContainer };
