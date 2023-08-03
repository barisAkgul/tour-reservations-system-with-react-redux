import styled from "styled-components";

export const PersonalInfoContainer = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  .container header {
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-align: center;
  }
  .container .form {
    margin-top: 30px;
  }
  .form .input-box {
    width: 100%;
    margin-top: 20px;
  }
  .input-box label {
    color: #333;
  }
  .form :where(.input-box input, .select-box) {
    position: relative;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #707070;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;
  }
  .input-box input:focus {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  .form .column {
    display: flex;
    column-gap: 15px;
  }
  .form .gender-box {
    margin-top: 20px;
  }
  .gender-box h3 {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .form :where(.gender-option, .gender) {
    display: flex;
    align-items: center;
    column-gap: 50px;
    flex-wrap: wrap;
  }
  .form .gender {
    column-gap: 5px;
  }
  .gender input {
    accent-color: rgb(130, 106, 251);
  }
  .form :where(.gender input, .gender label) {
    cursor: pointer;
  }
  .gender label {
    color: #707070;
  }
  .address :where(input, .select-box) {
    margin-top: 15px;
  }
  .select-box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 1rem;
  }
  .form button {
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
  }
  .form button:hover {
    background: rgb(88, 56, 250);
  }
  /*Responsive*/
  @media screen and (max-width: 578px) {
    .form .column {
      flex-wrap: wrap;
    }
    .form :where(.gender-option, .gender) {
      row-gap: 15px;
    }
  }
`;

// export const Form = styled.form`
//   margin-top: 30px;
// `;

// export const Column = styled.div`
//   display: flex;
//   column-gap: 15px;
// `;

// export const InputBox = styled.div`
//   width: 100%;
//   margin-top: 20px;
// `;

// export const Label = styled.label`
//   color: #333;
// `;

// export const Input = styled.input`
//   position: relative;
//   height: 50px;
//   width: 100%;
//   outline: none;
//   font-size: 1rem;
//   color: #707070;
//   margin-top: 8px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   padding: 0 15px;

//   &:focus {
//     box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
//   }
// `;

// export const AddressInputBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// export const ErrorInputBox = styled(InputBox)`
//   border-color: red;
// `;

// export const ErrorAddressInputBox = styled(AddressInputBox)`
//   border-color: red;
// `;

// export const SubmitButton = styled.button`
//   height: 55px;
//   width: 100%;
//   color: #fff;
//   font-size: 1rem;
//   font-weight: 400;
//   margin-top: 30px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   background: rgb(130, 106, 251);

//   &:hover {
//     background: rgb(88, 56, 250);
//   }
// // `;
// import styled, { css } from "styled-components";

// export const PersonalInfoContainer = styled.section`
//   position: relative;
//   width: 100%;
//   background: #fff;
//   padding: 25px;
//   border-radius: 8px;
//   box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
// `;

// export const InputBox = styled.div`
//   width: 100%;
//   margin-top: 20px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   padding: 0 15px;
//   ${(props) =>
//     props.error &&
//     css`
//       border-color: #ff0000;
//     `}
// `;

// export const AddressInputBox = styled.div`
//   margin-top: 20px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   padding: 0 15px;
//   ${(props) =>
//     props.error &&
//     css`
//       border-color: #ff0000;
//     `}
// `;

// export const Label = styled.label`
//   color: #333;
// `;

// export const Input = styled.input`
//   position: relative;
//   height: 50px;
//   width: 100%;
//   outline: none;
//   font-size: 1rem;
//   color: #707070;
//   margin-top: 8px;
//   border: none;
//   background-color: transparent;
//   &:focus {
//     outline: none;
//   }
// `;

// export const ErrorMessage = styled.p`
//   color: #ff0000;
//   font-style: italic;
//   margin-top: 5px;
// `;

// /* Responsive */
// const columnResponsive = css`
//   @media screen and (max-width: 578px) {
//     flex-wrap: wrap;
//   }
// `;

// const genderOptionResponsive = css`
//   @media screen and (max-width: 578px) {
//     row-gap: 15px;
//   }
// `;

// export const Column = styled.div`
//   display: flex;
//   column-gap: 15px;
//   ${columnResponsive}
// `;

// export const GenderBox = styled.div`
//   margin-top: 20px;
//   ${genderOptionResponsive}
// `;

// export const GenderOption = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 50px;
//   flex-wrap: wrap;
// `;

// export const Gender = styled.div`
//   column-gap: 5px;
// `;

// export const GenderInput = styled.input`
//   accent-color: rgb(130, 106, 251);
// `;

// export const GenderLabel = styled.label`
//   color: #707070;
// `;

// /* Custom Error Styles */
// export const ErrorInput = styled(Input)`
//   border: 1px solid #ff0000;
// `;

// export const ErrorAddressInputBox = styled(AddressInputBox)`
//   border: 1px solid #ff0000;
// `;
