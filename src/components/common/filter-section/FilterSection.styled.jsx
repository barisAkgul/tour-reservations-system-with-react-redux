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

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      opacity: 1 !important;
      margin: 0 !important;
    }

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
`;

export const Input = styled.input``;

export const GuestsInput = styled.input`
  width: 90%;
  input {
    width: 90px;
  }
`;

export const InputContainer = styled.div`
  @media (max-width: 968px) {
    flex: 0 0 46%;
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
    cursor: no-drop;
  }

  @media (max-width: 968px) {
    flex: 0 0 100%;
  }
`;

export const DetailPageFilterContainer = styled(FilterContainer)`
  display: flex;

  align-items: flex-start;
  gap: 30px;
  width: 100% !important;
  background-color: white;
  min-height: 100px;

  flex-wrap: wrap;
  border-radius: 8px;
  position: relative;
  z-index: 99;
  border: 1px solid grey;
  flex-direction: column;
  padding: 0;

  & > div:nth-child(1) {
    width: 100%;
  }

  & > div:nth-child(2) {
    width: 100%;

    input {
      width: 90px;
    }
  }

  &:nth-child(1) {
    flex: 0 0 20%;
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

    width: 100%;

    &:focus {
      border: none;
      outline: none;
    }
  }

  ${LocationInput} {
    //width: 200px !important;
  }

  ${DateInput} {
    width: 180px;
  }

  ${GuestsInput} {
    width: 90px;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  ${InputContainer} {
    flex: 0 0 100%;

    @media (max-width: 768px) {
      flex: 0 0 50%;
      padding-right: 16px;
    }

    @media (max-width: 576px) {
      flex: 0 0 100%;
    }
  }

  ${InputHeader} {
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    color: #444444;
    gap: 4px;
    span {
      color: #fd4c5c;
      font-size: 24px;
      display: contents;
    }
  }

  ${SearchButton} {
    padding: 14px 24px;
    background-color: #fd4c5c;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
  }
`;
