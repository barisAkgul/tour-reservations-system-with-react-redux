import React from "react";

import * as S from "./HomeHeroSection.styled";
import FilterSection from "@components/common/filter-section/FilterSection";

const HomeHeroSection = () => {
  return (
    <S.HeroSectionContainer>
      <S.HeroSectionBody>
        <S.Content>
          <h1>Your jouney starts here</h1>
          <p>Discover and book amazing travel experiences</p>
          <FilterSection buttonText="Search" redirectUrl="/tours" />
        </S.Content>
      </S.HeroSectionBody>
    </S.HeroSectionContainer>
  );
};

export { HomeHeroSection };
