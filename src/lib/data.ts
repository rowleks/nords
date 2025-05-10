import { CategoryType, MenuItemType, ReviewType } from "../types/types";

// Menu Tabs

export const burgers: MenuItemType[] = [
  {
    name: "Lamb Burger",
    src: "/images/lamb-burger.png",
    alt: "A savory lamb burger with fresh herbs and spices",
    price: 12.99,
  },
  {
    name: "Beef Burger",
    src: "/images/beef-burger.png",
    alt: "A juicy beef burger with lettuce and tomato",
    price: 10.99,
  },
  {
    name: "Bacon Burger",
    src: "/images/bacon-burger.png",
    alt: "A delicious bacon burger with fresh ingredients",
    price: 11.99,
  },
  {
    name: "Vegan Burger",
    src: "/images/vegan-burger.png",
    alt: "A healthy vegan burger with plant-based ingredients",
    price: 9.99,
  },
  {
    name: "Classic Burger",
    src: "/images/classic-burger.png",
    alt: "A traditional classic burger with all the fixings",
    price: 8.99,
  },
  {
    name: "Chicken Burger",
    src: "/images/chicken-burger.png",
    alt: "A crispy chicken burger with fresh toppings",
    price: 10.49,
  },
];

export const sides: MenuItemType[] = [
  {
    name: "Nuggets",
    src: "/images/nuggets-and-fries.png",
    alt: "A serving of crispy chicken nuggets",
    price: 5.99,
  },
  {
    name: "Fries Cone",
    src: "/images/fries-cone.png",
    alt: "A cone filled with crispy fries",
    price: 4.49,
  },
  {
    name: "Onion Rings",
    src: "/images/onion-rings.png",
    alt: "A serving of crunchy onion rings",
    price: 4.99,
  },
];

export const desserts: MenuItemType[] = [
  {
    name: "Ice Cream",
    src: "/images/ice-cream.png",
    alt: "A scoop of creamy ice cream",
    price: 4.99,
  },
  {
    name: "Chocolate Donut",
    src: "/images/chocolate-donut.png",
    alt: "A chocolate-glazed donut with sprinkles",
    price: 2.99,
  },
  {
    name: "Strawberry Cake",
    src: "/images/strawberry-cake.png",
    alt: "A slice of delicious strawberry cake",
    price: 5.49,
  },
];

// Reviews
export const reviews: ReviewType[] = [
  {
    name: "Emily Chen",
    rating: 5,
    comment:
      "The vegan burger at Nord's is my go-to order. The patty is always cooked to perfection and the toppings are so fresh! The fries are also amazing.",
    avatar: "/images/client1.webp",
    occupation: "Marketing Specialist",
  },
  {
    name: "David Lee",
    rating: 4,
    comment:
      "I've been going to Nord's for years and I've never been disappointed. The service is always friendly and the food is consistently good. My only complaint is that the portions could be a bit bigger.",
    avatar: "/images/client2.webp",
    occupation: "Graphic Designer",
  },
  {
    name: "Rachel Patel",
    rating: 5,
    comment:
      "I recently tried the strawberry cake at Nord's and it was amazing! The cake was so moist and the flavor was incredible. I've been dreaming about it ever since.",
    avatar: "/images/client3.webp",
    occupation: "Event Planner",
  },
];

// Categories

export const categories: CategoryType[] = [
  {
    name: "Desserts",
    src: "/images/muffin.webp",
    alt: "A slice of delicious muffin",
  },
  {
    name: "Sides",
    src: "/images/french-fries.webp",
    alt: "Delicious fries",
  },
  {
    name: "Burgers",
    src: "/images/cheeseburger.png",
    alt: "Delicious fries",
  },
];
