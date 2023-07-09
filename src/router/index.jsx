import { createBrowserRouter } from "react-router-dom";

import { MainLayouts } from "@layouts/main/MainLayouts";

//pages
import { HomePage } from "@pages/home-page/HomePage.jsx";
import { TourDetailsPage } from "@pages/tour-details-page/TourDetailsPage";
import { ToursPage } from "@pages/tours-page/ToursPage";
import { BookingSystemPage } from "@pages/booking-system-page/BookingSystemPage";

export const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        errorElement: <h1>Error Page</h1>,
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
            element: <h1>Page Not Found</h1>,
          },
        ],
      },
    ],
  },
]);
