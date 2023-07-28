import React, { useState, useRef } from "react";
import "./styles.css";

const months = [
  { value: "mm", label: "MM" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];

const years = [
  { value: "yy", label: "YY" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
  { value: "2029", label: "2029" },
  { value: "2030", label: "2030" },
];

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationMonth: "mm",
    expirationYear: "yy",
    cvv: "",
    isFlipped: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCVVFocus = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isFlipped: true,
    }));
  };

  const handleCVVBlur = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isFlipped: false,
    }));
  };

  return (
    <div className="container">
      <div className={`card-container`}>
        <div className={`front ${formData.isFlipped ? "flipped-front" : ""}`}>
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/ch-hassansaeed/Credit-Card-Payment-System/master/public/card-asserts/chip.png"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/ch-hassansaeed/Credit-Card-Payment-System/master/public/card-type/visa.png"
              alt=""
            />
          </div>
          <div className="card-number-box">
            {formData.cardNumber.padEnd(16, "#")}
          </div>
          <div className="flexbox">
            <div className="box">
              <span>card holder</span>
              <div className="card-holder-name">
                {formData.cardHolder || "full name"}
              </div>
            </div>
            <div className="box">
              <span>expires</span>
              <div className="expiration">
                <span className="exp-month">{formData.expirationMonth}</span> /
                <span className="exp-year">{formData.expirationYear}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`back ${formData.isFlipped ? "flipped-back" : ""}`}>
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box">{formData.cvv}</div>
            <img src="image/visa.png" alt="" />
          </div>
        </div>
      </div>

      <form>
        <div className="inputBox">
          <span>card number</span>
          <input
            type="text"
            maxLength="16"
            className="card-number-input"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputBox">
          <span>card holder</span>
          <input
            type="text"
            className="card-holder-input"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
          />
        </div>
        <div className="flexbox">
          <div className="inputBox">
            <span>expiration mm</span>
            <select
              name="expirationMonth"
              id=""
              className="month-input"
              value={formData.expirationMonth}
              onChange={handleInputChange}
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className="inputBox">
            <span>expiration yy</span>
            <select
              name="expirationYear"
              id=""
              className="year-input"
              value={formData.expirationYear}
              onChange={handleInputChange}
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.value}
                </option>
              ))}
            </select>
          </div>
          <div className="inputBox">
            <span>cvv</span>
            <input
              type="text"
              maxLength="4"
              className="cvv-input"
              name="cvv"
              value={formData.cvv}
              onFocus={handleCVVFocus}
              onBlur={handleCVVBlur}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" value="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default CreditCardForm;
