import React from "react";
import { useSelector } from "react-redux";

import { FilterSection } from "@components/common/filter-section/FilterSection";
import { TourCart } from "@components/common/tour-card/TourCard";

import tours from "@helpers/constants/tours.jsx";

import * as S from "./ToursPageContainer.styled";
import { TopSection } from "@components/common/top-section/TopSection";

const ToursPageContainer = () => {
  const {
    hotelId: city,
    maxDistance,
    maxPrice,
  } = useSelector((state) => state.filter);

  // Filtreleme fonksiyonu
  const filterTours = (tours) => {
    return tours.filter((tour) => {
      // Şehir eşleşmesi kontrolü
      if (city && !tour.city.toLowerCase().includes(city.toLowerCase())) {
        return false;
      }

      // Maksimum mesafe kontrolü
      if (maxDistance && tour.distance > maxDistance) {
        return false;
      }

      // Maksimum fiyat kontrolü
      if (maxPrice && tour.price > maxPrice) {
        return false;
      }

      return true;
    });
  };

  // Filtrelenmiş turları al
  const filteredTours = filterTours(tours);

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
