import React, { useEffect, useState } from "react";
import { BsCalendar2Date, BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";

import * as S from "./TourDetailsContainer.styled";

import { FilterSection } from "@components/common/filter-section/FilterSection";
import { DetailPageFilterContainer } from "@components/common/filter-section/FilterSection.styled";
import { fetchTourById } from "@helpers/api/request";
import Loader from "@components/common/loader/Loader";

const features = [
  {
    icon: <BsCalendar2Date className="icon" />,
    title: "Duration",
    desc: "9 days",
  },
  { icon: <IoPeopleSharp className="icon" />, title: "Max People", desc: "20" },
  { icon: <BsPerson className="icon" />, title: "Min Age", desc: "12+" },
  { icon: <GoLocation className="icon" />, title: "Pickup", desc: "Airport" },
];

const TourDetailsContainer = ({ id }) => {
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetchTourById(id)
      .then((tourData) => {
        setTour(tourData);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return <Loader />;
  }

  console.log(id, tour);
  return (
    <>
      <S.ToursDetailsContainer>
        <div className="left-section">
          <img src={tour.photo} alt="" />
          <div className="info">
            <div className="name">
              <h1>{tour.title}</h1>
            </div>

            <div className="tour-features-product">
              {features.map((feature, index) => (
                <div className="feature" key={index}>
                  {feature.icon}
                  <div className="title-desc">
                    <h6 className="title">{feature.title}</h6>
                    <p className="desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overview">
              {/* <h2 className="overview-title">Overview</h2> */}
              <p className="overview-content">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic life One
                day however a small line of blind text by the name of Lorem
                Ipsum decided to leave for the far World of Grammar.
              </p>
              <p className="overview-content">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the blind texts it is an almost unorthographic life One
                day however a small line of blind text by the name of Lorem
                Ipsum decided to leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="sticky-component">
            <DetailPageFilterContainer>
              <FilterSection
                buttonText="Booking Now"
                redirectUrl="/booking-system"
                location={tour.city}
              />
            </DetailPageFilterContainer>
          </div>
        </div>
      </S.ToursDetailsContainer>
    </>
  );
};

export { TourDetailsContainer };
