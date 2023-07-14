import tourImg01 from "@assets/images/tour-img01.jpg";
import tourImg02 from "@assets/images/tour-img02.jpg";
import tourImg03 from "@assets/images/tour-img03.jpg";
import tourImg04 from "@assets/images/tour-img04.jpg";
import tourImg05 from "@assets/images/tour-img05.jpg";
import tourImg06 from "@assets/images/tour-img06.jpg";
import tourImg07 from "@assets/images/tour-img07.jpg";

export const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    price: 150,
    maxGroupSize: 10,
    desc: "Enjoy a picturesque view of Westminster Bridge in London.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
      {
        name: "Jane Smith",
        rating: 4.6,
      },
    ],
    avgRating: 4.7,
    photo: tourImg01,
    featured: true,
    duration: 9,
    maxPeople: 20,
    minAge: "+12",
    pickup: "Airport",
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 200,
    maxGroupSize: 6,
    desc: "Explore the beautiful beaches and rich culture of Bali.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
      {
        name: "Jane Smith",
        rating: 4.7,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
    duration: 7,
    maxPeople: 15,
    minAge: "+10",
    pickup: "Hotel",
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 180,
    maxGroupSize: 9,
    desc: "Experience the stunning beauty of snowy mountains in Thailand.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.9,
      },
      {
        name: "Jane Smith",
        rating: 4.8,
      },
    ],
    avgRating: 4.85,
    photo: tourImg03,
    featured: true,
    duration: 6,
    maxPeople: 18,
    minAge: "+8",
    pickup: "Resort",
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 170,
    maxGroupSize: 13,
    desc: "Witness the breathtaking beauty of a sunrise in Thailand.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
      {
        name: "Jane Smith",
        rating: 4.6,
      },
    ],
    avgRating: 4.65,
    photo: tourImg04,
    featured: true,
    duration: 8,
    maxPeople: 25,
    minAge: "+14",
    pickup: "Resort",
  },
  {
    id: "05",
    title: "Nusa Penida, Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 220,
    maxGroupSize: 11,
    desc: "Discover the hidden gems of Nusa Penida island in Bali.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.4,
      },
      {
        name: "Jane Smith",
        rating: 4.7,
      },
    ],
    avgRating: 4.55,
    photo: tourImg05,
    featured: false,
    duration: 5,
    maxPeople: 14,
    minAge: "+12",
    pickup: "Hotel",
  },
  {
    id: "06",
    title: "Cherry Blossoms in Spring, Japan",
    city: "Japan",
    distance: 500,
    price: 190,
    maxGroupSize: 8,
    desc: "Immerse yourself in the beauty of cherry blossoms in Japan.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Smith",
        rating: 4.8,
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
    duration: 7,
    maxPeople: 12,
    minAge: "+10",
    pickup: "Hotel",
  },
  {
    id: "07",
    title: "Holmen Lofoten, Norway",
    city: "Norway",
    distance: 500,
    price: 250,
    maxGroupSize: 15,
    desc: "Experience the mesmerizing beauty of Holmen Lofoten in Norway.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
      {
        name: "Jane Smith",
        rating: 4.9,
      },
    ],
    avgRating: 4.8,
    photo: tourImg07,
    featured: false,
    duration: 10,
    maxPeople: 30,
    minAge: "+16",
    pickup: "Airport",
  },
  {
    id: "08",
    title: "Snowy Mountains, Switzerland",
    city: "Switzerland",
    distance: 500,
    price: 210,
    maxGroupSize: 8,
    desc: "Enjoy the snow-covered mountains in Switzerland.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
      {
        name: "Jane Smith",
        rating: 4.7,
      },
    ],
    avgRating: 4.75,
    photo: tourImg03,
    featured: false,
    duration: 7,
    maxPeople: 16,
    minAge: "+12",
    pickup: "Hotel",
  },
];

export default tours;
