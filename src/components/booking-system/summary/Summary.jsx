import { useSelector } from "react-redux";
import * as S from "./Summary.styled";

const calculateRoomExtra = (selectedRoom) => {
  if (selectedRoom === "Single") {
    return 0;
  } else if (selectedRoom === "Luxury") {
    return 0.08; // 8% extra charge
  } else if (selectedRoom === "Double") {
    return 0.12; // 12% extra charge
  } else {
    return 0;
  }
};

export const calculateDaysDifference = (checkInDate, checkOutDate) => {
  const checkInDateObj = new Date(checkInDate);
  const checkOutDateObj = new Date(checkOutDate);

  const timeDifference = checkOutDateObj - checkInDateObj;
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
};

const formData = {
  checkInDate: "2023-08-14",
  checkOutDate: "2023-08-20",
  adultCount: 2,
  travelCity: "New York",
  selectedRoom: "Luxury",
  totalPrice: "$750",
};

const Summary = () => {
  const {
    checkin: checkInDate,
    checkout: checkOutDate,
    adults: adultCount,
    tourId: travelCity,
    roomType: selectedRoom,
  } = useSelector((state) => state.filter);

  const rentalDays = calculateDaysDifference(checkInDate, checkOutDate);

  // Calculate the necessary data
  const pricePerNight = 100; // Example price per night in dollars
  const roomExtraPercentage = calculateRoomExtra(selectedRoom);
  const totalPrice = (
    pricePerNight *
    rentalDays *
    (1 + roomExtraPercentage) *
    adultCount
  ).toFixed(2);

  return (
    <S.SummaryContainer>
      <S.Column>
        <S.SummaryItem>
          <S.SummaryLabel>Check-in:</S.SummaryLabel>
          <span>{checkInDate}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>Check-out:</S.SummaryLabel>
          <span>{checkOutDate}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>Adult:</S.SummaryLabel>
          <span>{adultCount}</span>
        </S.SummaryItem>
      </S.Column>
      <S.Column>
        <S.SummaryItem>
          <S.SummaryLabel>Travel City:</S.SummaryLabel>
          <span>{travelCity}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>Selected Room:</S.SummaryLabel>
          <span>{selectedRoom}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>Rental Days:</S.SummaryLabel>
          <span>{rentalDays}</span>
        </S.SummaryItem>
      </S.Column>

      <S.Column>
        <S.SummaryItem>
          <S.SummaryLabel>Price per Night:</S.SummaryLabel>
          <span>${pricePerNight}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>
            Room Extra ({roomExtraPercentage * 100}%):
          </S.SummaryLabel>
          <span>
            ${(pricePerNight * rentalDays * roomExtraPercentage).toFixed(2)}
          </span>
        </S.SummaryItem>
        <S.SummaryItem>
          <S.SummaryLabel>Total Price:</S.SummaryLabel>
          <span>${totalPrice}</span>
        </S.SummaryItem>
      </S.Column>
    </S.SummaryContainer>
  );
};

export { Summary };
