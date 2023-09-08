import React from "react";

import * as S from "./PersonalInfo.styled";

const PersonalInfo = ({ handleInputChange, formValues }) => {
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
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
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
