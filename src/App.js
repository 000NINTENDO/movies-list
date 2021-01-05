import React, { Fragment, useState, useContext } from "react";
import MoviesList from "./MoviesList";
import NavigationBar from "./Nav";
import AddMovies from "./AddMovies";
import { MoviesContext } from "./MoviesContext";
import MoviesCards from "./MoviesCards";

const App = () => {
  const movies_1 = useContext(MoviesContext);
  const [movies, setMovies] = useState(movies_1);
  const lastMovieIndex = movies.length - 1;
  const prevMovie = movies[lastMovieIndex].name;

  const [movieName, setMovieName] = useState("");
  const [watchDate, setWatchDate] = useState("");

  const addMovieName = (event) => {
    event.preventDefault();
    setMovieName(event.target.value);
  };

  const addWatchDate = (event) => {
    event.preventDefault();
    setWatchDate(event.target.value);
  };
  const addNewMovie = (event) => {
    event.preventDefault();
    if (movieName !== "" && prevMovie !== movieName)
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          name: movieName,
          date: watchDate,
        },
      ]);
  };

  const dateLocal = new Date(watchDate).toDateString();

  const totalMovies = movies.length;

  return (
    <>
      <NavigationBar movies={totalMovies} time={dateLocal} />
      <AddMovies
        addMovieName={addMovieName}
        addMovie={addNewMovie}
        addWatchDate={addWatchDate}
      />
      <MoviesList movies={movies} />
      {/* <MoviesCards /> */}
    </>
  );
};

export default App;
