import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import { BsCalendar2Date, BsPerson } from "react-icons/bs";

import { setFieldValue } from "@stores/filterSlice.jsx";
import tours from "@helpers/constants/tours.jsx";
import { parseCities } from "@helpers/utils/index.js";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import * as S from "./FilterSection.styled.jsx";

import {
  customStyles,
  getInitialSelectedOption,
  formatDate,
} from "./FilterSection.helpers.jsx";

const cities = parseCities(tours);

const FilterSection = ({ buttonText, redirectUrl, location }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch(setFieldValue({ field, value }));
  };

  /* About Date */
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const tomorrow = new Date(startDate);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
      handleChange("checkout", null);
    }

    handleChange("checkin", formatDate(date));
  };

  const handleEndDateChange = (date) => {
    if (startDate && date < startDate) {
      return;
    }
    setEndDate(date);
    handleChange("checkout", formatDate(date));
  };

  /**********/

  const [selectedOption, setSelectedOption] = useState(() =>
    getInitialSelectedOption(location, filter, cities)
  );

  /*
   * On the detail page, to assign the location from the page
   */
  useEffect(() => {
    if (location) {
      dispatch(setFieldValue({ field: "tourId", value: selectedOption.value }));
    }
  }, []);

  const handleSelected = (selectedOption) => {
    setSelectedOption(selectedOption);
    dispatch(setFieldValue({ field: "tourId", value: selectedOption.value }));
  };

  /*
   * To redirect to the tour page or payment page, as the case may be.
   */
  const handleSearch = () => {
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  };

  const isButtonDisabled =
    !filter.tourId || !filter.checkin || !filter.checkout || !filter.adults;

  return (
    <S.FilterContainer>
      <S.InputContainer key={"hotelId"}>
        <S.InputHeader>
          <span>
            <GoLocation />
          </span>
          {"Location"}
        </S.InputHeader>
        <Select
          placeholder="Where are you going?"
          value={selectedOption}
          onChange={handleSelected}
          options={cities}
          styles={customStyles}
          isDisabled={location ? true : false}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputHeader>
          <span>
            <BsPerson />
          </span>
          Adults
        </S.InputHeader>
        <S.GuestsInput
          type="number"
          placeholder="Person"
          value={filter.adults}
          onChange={(e) => handleChange("adults", e.target.value)}
          min="1"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputHeader>
          <span>
            <BsCalendar2Date />
          </span>
          Check-in
        </S.InputHeader>

        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          dateFormat="MM/dd/yyyy"
          dateFormatCalendar="yyyy-MM-dd"
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText={filter.checkin ? filter.checkin : "Check-in Date"}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputHeader>
          <span>
            <BsCalendar2Date />
          </span>
          Check-out
        </S.InputHeader>

        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={
            startDate ? tomorrow.setDate(startDate.getDate() + 1) : new Date()
          }
          placeholderText={filter.checkout ? filter.checkout : "Check-out Date"}
        />
      </S.InputContainer>
      <S.SearchButton onClick={handleSearch} disabled={isButtonDisabled}>
        {buttonText}
      </S.SearchButton>
    </S.FilterContainer>
  );
};

export { FilterSection };
