import React from "react";

import * as S from "./MainLayouts.styled";

import { Main } from "@components/main";
import { Header } from "@containers/header/Header";
import { Footer } from "@components/footer/Footer";

const MainLayouts = () => {
  return (
    <S.MainLayout>
      <Header />
      <Main />
      <Footer />
    </S.MainLayout>
  );
};

export { MainLayouts };
