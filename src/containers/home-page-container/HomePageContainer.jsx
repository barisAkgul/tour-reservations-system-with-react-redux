import React from "react";

import { HomeHeroSection } from "@components/home/hero-section/HomeHeroSection";
import OnFeaturedTours from "@components/home/on-featured-tours/OnFeaturedTours";
import { GallerySection } from "@components/home/galery-section/GalerySection";

const HomePageContainer = () => {
  return (
    <>
      <HomeHeroSection />
      <OnFeaturedTours />
      <GallerySection />
    </>
  );
};

export { HomePageContainer };
