import room1 from "@assets/images/room1.jpg";
import room2 from "@assets/images/room2.jpg";
import room3 from "@assets/images/room3.jpg";

export const roomOptions = [
  {
    value: "Single",
    label: "Single Room",
    imageUrl: room1,
    roomExtra: 0, // RoomExtra değeri burada tanımlanmalıdır
  },
  {
    value: "Luxury",
    label: "Luxury Room",
    imageUrl: room2,
    roomExtra: 8, // RoomExtra değeri burada tanımlanmalıdır
  },
  {
    value: "Double",
    label: "Double Room",
    imageUrl: room3,
    roomExtra: 12, // RoomExtra değeri burada tanımlanmalıdır
  },
];
