import React, { useContext } from "react";
import DisplayMovies from "./DisplayMovies";
import MoviesCards from "./MoviesCards";
import "./css/movies-list.css";
import { MoviesContext } from "./MoviesContext";

const MoviesList = () => {
  const movies_1 = useContext(MoviesContext);

  // const [movieName, setMovieName] = useState('');

  // const [movies, setMovies] = useState(
  //     [
  //     {
  //         name: 'Spider Man: Sacrifice',
  //         subName: 'Sacrifice',
  //         price: '$100',
  //         src: './photos/spider-man.jpg',
  //         id: 1
  //     },
  //     {
  //         name: 'The Twilight Saga: Eclipse',
  //         subName: 'Eclipse',
  //         price: '$200',
  //         src: './photos/twilight-saga-elips.jpg',
  //         id: 2
  //     },
  //     {
  //         name: 'Thor: The Dark World',
  //         subName: 'The Dark World',
  //         price: '$500',
  //         src: './photos/thor.jpg',
  //         id: 3
  //     },
  //     {
  //         name: 'Iron Man 2',
  //         subName: '',
  //         price: '$1000',
  //         src: './photos/iron-man.jpg',
  //         id: 4
  //     },
  // ]
  // );

  // const inputMovies = useRef();
  // const addMovieName = (e) => {
  //     setMovieName(e.target.value);

  // }

  // const addMovie = (e) => {
  //     e.preventDefault();
  //     setMovies(prevMovies =>
  //         [
  //             ...prevMovies,
  //             {
  //                 name: movieName
  //             }
  //         ]
  //     );
  const movies = movies_1;

  return (
    <>
      {/* <div className="list">
            <h1>Todays Watch List: {movies.length} Movies</h1>
            <form onSubmit = {addMovie}>
                <input type="text" onChange={addMovieName}/>
                <button type="submit">Add Movie</button>
            </form>
        </div> */}

      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <MoviesCards
              key={movie.id}
              name={movie.name}
              watchDate={movie.date}
              src={movie.src}
            />
          );
        })}
      </div>
    </>
  );
};
export default MoviesList;
