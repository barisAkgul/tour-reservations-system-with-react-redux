import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar2Date, BsPerson } from "react-icons/bs";
import Select from "react-select";

import { useNavigate } from "react-router-dom";

import { setFieldValue } from "@stores/filterSlice.jsx";

import tours from "@helpers/constants/tours.jsx";
import { parseCities } from "@helpers/utils/index.js";

import * as S from "./FilterSection.styled.jsx";

const cities = parseCities(tours);

const customStyles = {
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

const FilterSection = ({ buttonText, redirectUrl }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (filter.hotelId) {
      setSelectedOption(
        cities.find((option) => option.value === filter.hotelId)
      );
    }
  }, [filter.hotelId]);

  const handleSelected = (selectedOption) => {
    setSelectedOption(selectedOption);
    dispatch(setFieldValue({ field: "hotelId", value: selectedOption.value }));
  };

  const handleSearch = () => {
    if (redirectUrl) {
      navigate(redirectUrl);
    }

    console.log(
      filter.hotelId,
      filter.checkin,
      filter.checkout,
      filter.adults,
      filter.children
    );
  };

  const handleChange = (field, value) => {
    dispatch(setFieldValue({ field, value }));
  };

  const inputs = [
    // {
    //   field: "hotelId",
    //   label: "Location",
    //   icon: <GoLocation />,
    //   type: "text",
    //   placeholder: "Where are you going?",
    //   value: filter.hotelId,
    // },
    {
      field: "checkin",
      label: "Check-in",
      icon: <BsCalendar2Date />,
      type: "date",
      placeholder: "MM/DD/YYYY",
      value: filter.checkin,
    },
    {
      field: "checkout",
      label: "Check-out",
      icon: <BsCalendar2Date />,
      type: "date",
      placeholder: "DD-MM-YYYY",
      value: filter.checkout,
    },
    {
      field: "adults",
      label: "Adults",
      icon: <BsPerson />,
      type: "number",
      min: "1",
      placeholder: "0",
      value: filter.adults,
    },
  ];

  const isButtonDisabled =
    !filter.hotelId || !filter.checkin || !filter.checkout || !filter.adults;

  return (
    <S.FilterContainer>
      <S.InputContainer key={"hotelId"}>
        <S.InputHeader>
          <span>
            <BsCalendar2Date />
          </span>
          {"Location"}
        </S.InputHeader>
        <Select
          placeholder="Where are you going?"
          value={selectedOption}
          onChange={handleSelected}
          options={cities}
          styles={customStyles}
        />
      </S.InputContainer>
      {inputs.map((input) => (
        <S.InputContainer key={input.field}>
          <S.InputHeader>
            <span>{input.icon}</span>
            {input.label}
          </S.InputHeader>
          <S.Input
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(e) => handleChange(input.field, e.target.value)}
            min={input.min}
          />
        </S.InputContainer>
      ))}
      <S.SearchButton onClick={handleSearch} disabled={isButtonDisabled}>
        {buttonText}
      </S.SearchButton>
    </S.FilterContainer>
  );
};

export { FilterSection };
