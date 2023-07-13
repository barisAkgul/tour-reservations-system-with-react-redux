import React from "react";

import * as S from "./TopSection.styled";

const TopSection = ({ pageName }) => {
  return (
    <S.TopSection>
      <img
        src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/header-banner-tour-list.jpg"
        alt=""
      />
      <h1 className="top-section-header">{pageName}</h1>
    </S.TopSection>
  );
};

export { TopSection };
