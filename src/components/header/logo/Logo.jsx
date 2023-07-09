import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">Logo</Link>
    </S.Logo>
  );
};

export { Logo };
