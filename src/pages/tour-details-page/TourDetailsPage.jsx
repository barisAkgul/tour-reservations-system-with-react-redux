import React from "react";
import { useParams } from "react-router-dom";

import { TourDetailsContainer } from "@containers/tour-details-container/TourDetailsContainer";

const TourDetailsPage = () => {
  const params = useParams();
  return <TourDetailsContainer id={params.id} />;
};

export { TourDetailsPage };
