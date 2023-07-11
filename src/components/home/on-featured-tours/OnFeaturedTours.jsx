import React from "react";

import { TourCart } from "@components/common/tour-card/TourCard";

import tours from "@helpers/constants/tours.jsx";

import * as S from "./OnFeaturedTours.styled";

const OnFeaturedTours = () => {
  return (
    <S.ToursContainer>
      <h1>Discover Weekly</h1>
      <p>An enim nullam tempor sapien gravida donec enim ipsum </p>

      <S.Tours>
        {tours.slice(0, 4).map((tour) => (
          <TourCart tour={tour} key={tour.id} />
        ))}
      </S.Tours>
    </S.ToursContainer>
  );
};

export default OnFeaturedTours;
