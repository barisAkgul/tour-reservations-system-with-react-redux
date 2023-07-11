import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { SlLocationPin } from "react-icons/sl";

import * as S from "./TourCard.styled";

const TourCart = ({ tour }) => {
  const { id, title, city, price, reviews, photo, avgRating } = tour;
  return (
    <Link to={`/detail/${id}`}>
      <S.TripCard>
        <S.TripImage src={photo} alt="trip" />
        <S.TripDetails>
          <S.TripTitle>{title}</S.TripTitle>
          <S.TripCity>
            <SlLocationPin style={{ color: "#00BB98" }} />
            {city}
          </S.TripCity>
          <S.Rating className="rating">
            {" "}
            <StarRatings
              rating={avgRating}
              starRatedColor="#FFC83E"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="1px"
            />
          </S.Rating>
          <S.PriceContainer>
            <S.Price>
              <S.PriceTag>From</S.PriceTag> ${price}
            </S.Price>
            <S.BookNowButton>Book Now</S.BookNowButton>
          </S.PriceContainer>
        </S.TripDetails>
      </S.TripCard>
    </Link>
  );
};

export { TourCart };
