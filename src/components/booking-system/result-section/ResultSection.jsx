import React, { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { resetFilter } from "@stores/filterSlice";

import * as S from "./ResultSection.styled";

const ResultSection = ({ currentStep }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentStep === 4) {
      dispatch(resetFilter());
    }
  }, [currentStep]);

  return (
    <S.Container>
      <S.SuccessContainer>
        <S.SuccessTitle>
          <AiOutlineCheck />
          <span>Thanks for your reservation!</span>
        </S.SuccessTitle>
        <S.SuccessText>Check your inbox for the receipt.</S.SuccessText>
        <S.HomePageLink to="/">Home Page</S.HomePageLink>
      </S.SuccessContainer>
    </S.Container>
  );
};

export { ResultSection };
