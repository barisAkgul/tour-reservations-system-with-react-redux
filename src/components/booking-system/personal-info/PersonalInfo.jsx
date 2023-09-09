import React, { useState } from "react";

import * as S from "./PersonalInfo.styled";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CustomHeader } from "@components/common/custom-date-picker/CustomDatePicker";

const PersonalInfo = ({ handleInputChange, formValues }) => {
  const [birthday, setBirthday] = useState(null);
  return (
    <S.PersonalInfoContainer>
      <form action="#" className="form">
        <div className="column">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone number"
              required
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input-box date-container">
            <label>Birth Date</label>
            {/* <input type="date" placeholder="Enter birth date" required /> */}
            <DatePicker
              renderCustomHeader={CustomHeader}
              selected={birthday}
              onChange={(date) => setBirthday(date)}
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={10}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a Date"
              maxDate={new Date()}
              className=".react-datepicker__header "
            />
          </div>
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            name="adress"
            placeholder="Enter street address"
            required
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Enter street address line 2"
            required
          />
        </div>
      </form>
    </S.PersonalInfoContainer>
  );
};

export { PersonalInfo };
