import React from "react";
import "./css/movies-cards.css";

const MoviesCards = (props) => {
  const inputedDate = props.watchDate;

  const dateLocal = new Date(inputedDate).toUTCString().slice(0, 16);

  const time = new Date(inputedDate).toUTCString().slice(16, 22);

  return (
    <>
      <div className="movies-cards">
        <div className="card-container">
          <div className="movie-poster">
            <img src={props.src} alt={props.name} />
          </div>
          <div className="movie-details">
            <div className="movie-title">
              <h3 className="movie-name">{props.name}</h3>
            </div>
            <p className="watch-on"> Watch On </p>
            <p className="movie-date"> {dateLocal}</p>
            <p className="movie-rating">{props.rating}</p>
            <p className="movie-date">{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesCards;
