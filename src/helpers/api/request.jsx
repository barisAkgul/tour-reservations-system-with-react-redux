import tours from "@helpers/constants/tours";

export const fetchTourById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tour = tours.find((tour) => tour.id === id);
      if (tour) {
        resolve(tour);
      } else {
        reject(new Error("Tour not found"));
      }
    }, 1000);
  });
};
