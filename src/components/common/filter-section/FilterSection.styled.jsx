import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  row-gap: 30px;
  width: 80vw;
  background-color: white;
  /* min-height: 100px; */
  flex-wrap: wrap;
  border-radius: 8px;
  position: relative;
  z-index: 99;
  padding: 25px 28px;

  & > div:nth-child(1) {
    width: 250px;
  }

  & > div:nth-child(4) {
    width: 90px;

    input {
      width: 90px;
    }
  }

  &::before {
    background-color: hsla(0, 0%, 100%, 0.15);
    border-radius: 8px;
    bottom: -10px;
    content: "";
    left: -10px;
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: -1;
  }

  input {
    background-color: #fff;

    border-radius: 8px;
    font-size: 14px;
    color: #484848;
    line-height: 1.2;
    height: 30px;
    padding: 0px;

    border: none;

    color: #999999;
    cursor: pointer;

    border: none;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export const LocationInput = styled.input`
  &[type="text"] {
    width: 60px;
  }
`;

export const DateInput = styled.input`
  // width: 150px;

  // &::-webkit-calendar-picker-indicator,
  // &::-webkit-inner-spin-button,
  // &::-webkit-clear-button {
  //   opacity: 0;
  // }
`;

export const Input = styled.input``;

export const GuestsInput = styled.input`
  width: 30px;
`;

export const InputContainer = styled.div`
  @media (max-width: 968px) {
    flex: 0 0 50%;
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;

export const InputHeader = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #444444;
  gap: 4px;
  margin-bottom: 8px;
  span {
    color: #fd4c5c;
    font-size: 24px;
  }
`;

export const SearchButton = styled.button`
  padding: 14px 24px;
  background-color: #fd4c5c;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 968px) {
    flex: 0 0 100%;
  }
`;
