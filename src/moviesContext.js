import React from "react";

export const movies = [
  {
    name: "Spider Man: Sacrifice",
    subName: "Sacrifice",
    price: "$100",
    date: "October 22, 2020",
    src: "./photos/spider-man.jpg",
    id: 1,
  },
  {
    name: "The Twilight Saga: Eclipse",
    subName: "Eclipse",
    price: "$200",
    date: "October 23, 2020",
    src: "./photos/twilight-saga-elips.jpg",
    id: 2,
  },
  {
    name: "Thor: The Dark World",
    subName: "The Dark World",
    price: "$500",
    date: "October 24, 2020",
    src: "./photos/thor.jpg",
    id: 3,
  },
  {
    name: "Iron Man 2",
    subName: "",
    price: "$1000",
    date: "October 25, 2020",
    src: "./photos/iron-man.jpg",
    id: 4,
  },
  {
    name: "Iron Man 2",
    subName: "",
    price: "$1000",
    date: "October 25, 2020",
    src: "./photos/iron-man.jpg",
    id: 4,
  },
];

const MoviesContext = React.createContext(movies);

export { MoviesContext };
