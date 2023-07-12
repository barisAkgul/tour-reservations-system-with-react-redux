import React from "react";

const TopSection = ({ pageName }) => {
  <S.TopSection>
    <img
      src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/header-banner-tour-list.jpg"
      alt=""
    />
    <h1 className="top-section-header">{pageName}</h1>
  </S.TopSection>;
};

export { TopSection };
