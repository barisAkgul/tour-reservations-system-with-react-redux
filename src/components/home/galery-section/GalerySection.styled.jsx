import styled from "styled-components";

import backgroundImg from "@assets/images/gallery-bg.jpg";

export const Section = styled.section`
  //background-color: #f8f8f8;
  padding: 5rem 1rem;
  background-image: url(${backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const GalleryColumn = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
`;

export const GalleryImage = styled.img`
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;
`;

export const GalleryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  max-width: 400px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  padding: 16px 24px;
  background-color: #fd4c5c;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
