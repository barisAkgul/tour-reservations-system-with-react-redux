import { useState } from "react";

import "./SelectRoom.css";

const SelectRoom = ({ onChange }) => {
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleRoomSelection = (event) => {
    setSelectedRoom(event.target.value);
    onChange(event);
  };

  return (
    <div className="select-room-container">
      <div className="room-selection">
        <label>
          <input
            name="roomType"
            type="radio"
            value="luxury"
            checked={selectedRoom === "luxury"}
            onChange={handleRoomSelection}
          />
          <span>Luxury Room</span>
          <img
            src="https://storage.googleapis.com/theme-vessel-items/checking-sites/hotel-alpha-html/HTML/main/img/room/img-3.jpg"
            alt="Luxury Room"
          />
        </label>
      </div>
      <div className="room-selection">
        <label>
          <input
            name="roomType"
            type="radio"
            value="single"
            checked={selectedRoom === "single"}
            onChange={handleRoomSelection}
          />
          <span>Single Room</span>
          <img
            src="https://storage.googleapis.com/theme-vessel-items/checking-sites/hotel-alpha-html/HTML/main/img/room/img-2.jpg"
            alt="Single Room"
          />
        </label>
      </div>
      <div className="room-selection">
        <label>
          <input
            name="roomType"
            type="radio"
            value="double"
            checked={selectedRoom === "double"}
            onChange={handleRoomSelection}
          />
          <span>Double Room</span>
          <img
            src="https://storage.googleapis.com/theme-vessel-items/checking-sites/hotel-alpha-html/HTML/main/img/room/img-1.jpg"
            alt="Double Room"
          />
        </label>
      </div>
    </div>
  );
};

export default SelectRoom;
