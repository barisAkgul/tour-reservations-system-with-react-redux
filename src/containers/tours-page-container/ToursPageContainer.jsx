import React from "react";
import { useSelector } from "react-redux";

import { FilterSection } from "@components/common/filter-section/FilterSection";
import { TourCart } from "@components/common/tour-card/TourCard";
import { TopSection } from "@components/common/top-section/TopSection";

import tours from "@helpers/constants/tours.jsx";
import { filterTours } from "@helpers/utils";

import * as S from "./ToursPageContainer.styled";

const ToursPageContainer = () => {
  const { tourId: city, adults: groupSize } = useSelector(
    (state) => state.filter
  );

  const filteredTours = filterTours(tours, city, groupSize);

  return (
    <S.ToursPageContainer>
      <TopSection pageName={"Tours"} />

      <FilterSection buttonText="Search" />

      <S.ToursContainer>
        <h2>{filteredTours.length} Tours </h2>
        <S.Tours>
          {filteredTours.map((tour) => (
            <TourCart tour={tour} key={tour.id} />
          ))}
        </S.Tours>
      </S.ToursContainer>
    </S.ToursPageContainer>
  );
};

export { ToursPageContainer };
