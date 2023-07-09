import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./Header.styled";

import { Logo } from "@components/header/logo/Logo";
import { Navbar } from "@components/header/navbar/Navbar";
import { ButtonSection } from "@components/header/button-section/ButtonSection";

const Header = () => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <S.Header>
      <S.HeaderContainer active={active || pathname !== "/"}>
        <Logo />
        <Navbar />
        <ButtonSection active={active || pathname !== "/"} />
      </S.HeaderContainer>
    </S.Header>
  );
};

export { Header };
