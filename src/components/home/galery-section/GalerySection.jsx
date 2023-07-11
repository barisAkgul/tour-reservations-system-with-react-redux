import React from "react";

import gallery1 from "@assets/images/gallery-1.jpg";
import gallery2 from "@assets/images/gallery-2.jpg";
import gallery3 from "@assets/images/gallery-3.jpg";

import * as S from "./GalerySection.styled";

const GallerySection = () => {
  return (
    <S.Section>
      <S.Container>
        <S.ImageGallery>
          <S.GalleryColumn>
            <S.GalleryImage src={gallery1} alt="gallary" />
          </S.GalleryColumn>
          <S.GalleryColumn>
            <S.GalleryImage src={gallery2} alt="gallary" />
            <S.GalleryImage src={gallery3} alt="gallary" />
          </S.GalleryColumn>
        </S.ImageGallery>
        <S.GalleryContent>
          <S.ContentWrapper>
            <S.SectionTitle>
              Our trip gallary that will inspire you
            </S.SectionTitle>
            <S.SectionSubtitle>
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </S.SectionSubtitle>
            <S.Button>View All</S.Button>
          </S.ContentWrapper>
        </S.GalleryContent>
      </S.Container>
    </S.Section>
  );
};

export { GallerySection };
