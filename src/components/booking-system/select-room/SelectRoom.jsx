import React, { useState } from "react";

import * as S from "./SelectRoom.styed";
import { roomOptions } from "./constant";
import { useDispatch } from "react-redux";

import { setFieldValue } from "@stores/filterSlice";

const SelectRoom = ({ handleInputChange }) => {
  const [selectedRoom, setSelectedRoom] = useState();
  const dispatch = useDispatch();

  const handleRoomSelection = (event) => {
    setSelectedRoom(event.target.value);
    handleInputChange(event);
    dispatch(setFieldValue({ field: "roomType", value: event.target.value }));
  };

  return (
    <S.SelectRoomContainer>
      {roomOptions.map((roomOption) => (
        <S.RoomSelectionWrapper key={roomOption.value}>
          <S.RoomSelectionLabel>
            <S.RoomSelectionInput
              name="roomType"
              type="radio"
              value={roomOption.value}
              checked={selectedRoom === roomOption.value}
              onChange={handleRoomSelection}
            />
            <S.RoomSelectionText>
              {roomOption.label}{" "}
              {roomOption.roomExtra > 0 && `(+${roomOption.roomExtra}%)`}
            </S.RoomSelectionText>
            <S.RoomSelectionImage
              src={roomOption.imageUrl}
              alt={roomOption.label}
            />
          </S.RoomSelectionLabel>
        </S.RoomSelectionWrapper>
      ))}
    </S.SelectRoomContainer>
  );
};

export { SelectRoom };
