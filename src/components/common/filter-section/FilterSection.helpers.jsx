export const customStyles = {
  container: (provided) => ({
    ...provided,
    outline: "none",
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    padding: 0,
    "&:hover": {
      border: "none",
    },
    "&:focus": {
      border: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#DEEBFF" : "white",
    color: state.isSelected ? "white" : "grey",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(153, 153, 153)",
    padding: "0",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
};

/* */
export const getInitialSelectedOption = (location, filter, cities) => {
  if (location) {
    return cities.find((option) => option.label === location);
  }

  if (filter.tourId) {
    return cities.find((option) => option.value === filter.tourId);
  }

  return null;
};

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Ayı iki haneli olarak al
  const day = String(date.getDate()).padStart(2, "0"); // Günü iki haneli olarak al
  return `${year}-${month}-${day}`;
};
