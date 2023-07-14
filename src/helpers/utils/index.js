export const parseCities = (tours) => {
  const cities = [{ label: "All", value: "" }];

  tours.map((tour) => {
    const { city } = tour;

    if (!cities.some((item) => item.value === city.toLowerCase())) {
      cities.push({ value: city.toLowerCase(), label: city });
    }
  });

  return cities;
};

export const filterTours = (tours, city, groupSize) => {
  return tours.filter((tour) => {
    if (city && !tour.city.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }

    if (tour.maxGroupSize <= groupSize) {
      return false;
    }

    return true;
  });
};
