import styled from "styled-components";

export const SelectRoomContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const RoomSelectionWrapper = styled.div`
  text-align: center;
`;

export const RoomSelectionLabel = styled.label`
  background-color: hsl(var(--neutral1));
  border: 2px solid hsl(229 24% 87%);
  border-radius: 0.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 1rem;
  min-height: 245px;

  &:has([type="radio"]:checked) {
    border-color: hsl(243 100% 62%);
    /* background-color: hsl(var(--accent) / 0.05); */
  }
`;

export const RoomSelectionInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  inset: 0;
  cursor: pointer;
`;

export const RoomSelectionImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
  margin-top: 10px;
`;

export const RoomSelectionText = styled.span`
  font-size: 16px;
  font-weight: bold;

  ${RoomSelectionInput}:checked + & {
    color: #ff5500;
  }
`;
