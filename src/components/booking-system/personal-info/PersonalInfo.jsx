import React from "react";

import * as S from "./PersonalInfo.styled";
//import "./styles.css";

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

// import React from "react";
// import * as S from "./PersonalInfo.styled";

// const PersonalInfo = ({ handleInputChange, formValues }) => {
//   const validateInputs = () => {
//     return (
//       !formValues.fullName ||
//       !formValues.email ||
//       !formValues.phone ||
//       !formValues.address
//     );
//   };

//   return (
//     <S.PersonalInfoContainer>
//       <form action="#" className="form">
//         <div className="column">
//           <div className={`input-box ${!formValues.fullName ? "error" : ""}`}>
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter full name"
//               value={formValues.fullName}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </div>

//           <div className={`input-box ${!formValues.email ? "error" : ""}`}>
//             <label>Email Address</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter email address"
//               value={formValues.email}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </div>
//         </div>
//         <div className="column">
//           <div className={`input-box ${!formValues.phone ? "error" : ""}`}>
//             <label>Phone Number</label>
//             <input
//               type="number"
//               name="phone"
//               placeholder="Enter phone number"
//               value={formValues.phone}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <label>Birth Date</label>
//             <input type="date" placeholder="Enter birth date" required />
//           </div>
//         </div>

//         <div
//           className={`input-box address ${!formValues.address ? "error" : ""}`}
//         >
//           <label>Address</label>
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter street address"
//             value={formValues.address}
//             onChange={(e) => handleInputChange(e)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter street address line 2"
//             required
//           />
//         </div>
//       </form>
//     </S.PersonalInfoContainer>
//   );
// };

// export { PersonalInfo };

// import React from "react";
// import * as S from "./PersonalInfo.styled";

// const PersonalInfo = ({ handleInputChange, formValues }) => {
//   return (
//     <S.PersonalInfoContainer>
//       <form action="#" className="form">
//         <div className="column">
//           <S.InputBox className={formValues.fullName === "" ? "error" : ""}>
//             <S.Label>Full Name</S.Label>
//             <S.Input
//               type="text"
//               name="fullName"
//               placeholder="Enter full name"
//               value={formValues.fullName}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </S.InputBox>

//           <S.InputBox className={formValues.email === "" ? "error" : ""}>
//             <S.Label>Email Address</S.Label>
//             <S.Input
//               type="text"
//               name="email"
//               placeholder="Enter email address"
//               value={formValues.email}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </S.InputBox>
//         </div>
//         <div className="column">
//           <S.InputBox className={formValues.phone === "" ? "error" : ""}>
//             <S.Label>Phone Number</S.Label>
//             <S.Input
//               type="number"
//               name="phone"
//               placeholder="Enter phone number"
//               value={formValues.phone}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//           </S.InputBox>
//           <S.InputBox>
//             <S.Label>Birth Date</S.Label>
//             <S.Input type="date" placeholder="Enter birth date" required />
//           </S.InputBox>
//         </div>

//         <S.AddressInputBox className={formValues.address === "" ? "error" : ""}>
//           <S.Label>Address</S.Label>
//           <S.Input
//             type="text"
//             name="address"
//             placeholder="Enter street address"
//             value={formValues.address}
//             onChange={(e) => handleInputChange(e)}
//             required
//           />
//           <S.Input
//             type="text"
//             placeholder="Enter street address line 2"
//             required
//           />
//         </S.AddressInputBox>
//       </form>
//     </S.PersonalInfoContainer>
//   );
// };

// export { PersonalInfo };

// import React, { useState } from "react";
// import * as S from "./PersonalInfo.styled";

// const PersonalInfo = ({ handleInputChange, formValues }) => {
//   const [fullNameError, setFullNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);
//   const [addressError, setAddressError] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Validation
//     if (!formValues.fullName) {
//       setFullNameError(true);
//     } else {
//       setFullNameError(false);
//     }

//     if (!formValues.email) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }

//     if (!formValues.phone) {
//       setPhoneError(true);
//     } else {
//       setPhoneError(false);
//     }

//     if (!formValues.address) {
//       setAddressError(true);
//     } else {
//       setAddressError(false);
//     }
//   };

//   return (
//     <S.PersonalInfoContainer>
//       <form onSubmit={handleFormSubmit} className="form">
//         <div className="column">
//           <S.InputBox className={fullNameError ? "error" : ""}>
//             <S.Label>Full Name</S.Label>
//             <S.Input
//               type="text"
//               name="fullName"
//               placeholder="Enter full name"
//               value={formValues.fullName}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//             {fullNameError && (
//               <S.ErrorMessage>Please enter your full name.</S.ErrorMessage>
//             )}
//           </S.InputBox>

//           <S.InputBox className={emailError ? "error" : ""}>
//             <S.Label>Email Address</S.Label>
//             <S.Input
//               type="text"
//               name="email"
//               placeholder="Enter email address"
//               value={formValues.email}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//             {emailError && (
//               <S.ErrorMessage>Please enter your email address.</S.ErrorMessage>
//             )}
//           </S.InputBox>
//         </div>
//         <div className="column">
//           <S.InputBox className={phoneError ? "error" : ""}>
//             <S.Label>Phone Number</S.Label>
//             <S.Input
//               type="number"
//               name="phone"
//               placeholder="Enter phone number"
//               value={formValues.phone}
//               onChange={(e) => handleInputChange(e)}
//               required
//             />
//             {phoneError && (
//               <S.ErrorMessage>Please enter your phone number.</S.ErrorMessage>
//             )}
//           </S.InputBox>
//           <S.InputBox>
//             <S.Label>Birth Date</S.Label>
//             <S.Input type="date" placeholder="Enter birth date" required />
//           </S.InputBox>
//         </div>

//         <S.AddressInputBox className={addressError ? "error" : ""}>
//           <S.Label>Address</S.Label>
//           <S.Input
//             type="text"
//             name="address"
//             placeholder="Enter street address"
//             value={formValues.address}
//             onChange={(e) => handleInputChange(e)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter street address line 2"
//             required
//           />
//           {addressError && (
//             <S.ErrorMessage>Please enter your address.</S.ErrorMessage>
//           )}
//         </S.AddressInputBox>

//         <button type="submit">Submit</button>
//       </form>
//     </S.PersonalInfoContainer>
//   );
// };

// export { PersonalInfo };
