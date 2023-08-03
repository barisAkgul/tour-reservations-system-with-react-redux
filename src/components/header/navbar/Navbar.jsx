import React, { useState, useEffect } from "react";
import * as S from "./Navbar.styled";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

import useClickOutside from "@hooks/useClickOutside";

export const navbarItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Tours", link: "/tours" },
  // { id: 3, title: "Blog", link: "/blog" },
  // { id: 4, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useClickOutside(() => {
    setShowMenu(false);
  });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Normal Navbar */}
      <S.DesktopNavbar>
        {navbarItems.map((item) => (
          <S.NavbarItem key={item.id}>
            <Link to={item.link}>{item.title}</Link>
          </S.NavbarItem>
        ))}
      </S.DesktopNavbar>

      {/* Mobile Navbar */}
      <S.MobileNavbar ref={menuRef}>
        <S.ToggleButton onClick={toggleMenu}>
          <RxHamburgerMenu />
        </S.ToggleButton>
        <S.NavbarMenu showMenu={showMenu}>
          <S.CloseButton onClick={toggleMenu}>
            <GrClose />
          </S.CloseButton>
          <S.MobileNavbarItemContainer>
            {navbarItems.map((item) => (
              <S.MobileNavbarItem key={item.id} onClick={closeMenu}>
                <Link to={item.link}>{item.title}</Link>
              </S.MobileNavbarItem>
            ))}
          </S.MobileNavbarItemContainer>
        </S.NavbarMenu>
      </S.MobileNavbar>
    </>
  );
};

export { Navbar };
