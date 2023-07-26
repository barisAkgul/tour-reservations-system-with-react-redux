import React from "react";

import * as S from "./PersonalInfo.styled";
import "./styles.css";

const PersonalInfo = ({ handleInputChange, formValues }) => {
  return (
    <section className="personal-info-container">
      <form action="#" className="form">
        <div className="column">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
          </div>
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input
            type="text"
            placeholder="Enter street address line 2"
            required
          />
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Country</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Turkey</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
      </form>
    </section>
  );
};

export { PersonalInfo };
