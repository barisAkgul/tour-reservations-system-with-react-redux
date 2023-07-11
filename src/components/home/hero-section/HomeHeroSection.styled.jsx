import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "@assets/images/hero.jpg";
import { FilterContainer } from "@components/common/filter-section/FilterSection.styled";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSectionContainer = styled.div`
  min-height: 100vh;
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 150px 30px;
  margin-top: -85px;

  &::before {
    content: "";
    background-color: #1d293e;
    opacity: 0.4;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

export const HeroSectionBody = styled.div`
  position: relative;
`;

export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease 1s 1 normal forwards;
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease 0.5s 1 normal forwards;
  }

  ${FilterContainer} {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease 1.5s 1 normal forwards;
  }
`;
