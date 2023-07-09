import styled from "styled-components";
import { Breakpoints } from "@helpers/constants/general";

export const DesktopNavbar = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    display: none;
  }
`;

export const MobileNavbar = styled.div`
  display: none;

  @media (max-width: ${Breakpoints.TABLET}px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
  }
`;

export const NavbarItem = styled.div`
  cursor: pointer;
  transition: 0.3s ease all;

  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;

  &:hover {
    color: var(--red);
  }
`;

export const MobileNavbarItem = styled(NavbarItem)`
  padding: 10px;
`;

export const MobileNavbarItemContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  align-items: center;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
  transform: translateX(${({ showMenu }) => (showMenu ? "0" : "-100%")});
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media (max-width: ${Breakpoints.TABLET}px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: var(--white);
    z-index: 1;
    padding: 20px;
    border-right: 1px solid var(--light-gray);
  }

  a {
    text-decoration: none;
    color: var(--text-dark);
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 10px;
    position: relative;

    ::after {
      content: "";
      width: 0;
      height: 1px;
      background-color: var(--main-blue);
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      transition: 0.2s ease width;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
