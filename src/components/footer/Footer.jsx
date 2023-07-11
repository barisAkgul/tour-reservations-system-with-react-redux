import React from "react";

import { footerData } from "./constants";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.FooterContainer>
      {footerData.map((col, index) => (
        <S.FooterCol key={index}>
          <S.FooterHeading>{col.heading}</S.FooterHeading>
          {col.items.map((item, index) => (
            <S.FooterLink key={index}>{item}</S.FooterLink>
          ))}
        </S.FooterCol>
      ))}
    </S.FooterContainer>
  );
};

export { Footer };
