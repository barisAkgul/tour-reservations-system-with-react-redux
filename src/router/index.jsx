import { createBrowserRouter } from "react-router-dom";

import { MainLayouts } from "@layouts/main/MainLayouts";

//pages
import { HomePage } from "@pages/home-page/HomePage.jsx";
import { TourDetailsPage } from "@pages/tour-details-page/TourDetailsPage";
import { ToursPage } from "@pages/tours-page/ToursPage";
import { BookingSystemPage } from "@pages/booking-system-page/BookingSystemPage";

import { PageNotFound } from "@components/common/page-not-found/PageNotFound";
import { ErrorPage } from "@components/common/error/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "detail/:id",
            element: <TourDetailsPage />,
          },
          {
            path: "tours",
            element: <ToursPage />,
          },
          {
            path: "booking-system",
            element: <BookingSystemPage />,
          },
          {
            path: "*",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);
