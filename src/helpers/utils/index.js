export const parseCities = (tours) => {
  const cities = [];

  tours.forEach((tour) => {
    const { city } = tour;

    if (!cities.some((item) => item.value === city.toLowerCase())) {
      cities.push({ value: city.toLowerCase(), label: city });
    }
  });

  return cities;
};
