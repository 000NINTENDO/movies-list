import React, { Fragment, useState } from 'react';
import MoviesList from './MoviesList';
import NavigationBar from './Nav';
import AddMovies from './AddMovies'
import MoviesCards from './MoviesCards'

const App = () => {

  const [movies, setMovies] = useState(
      [
      {
          name: 'Spider Man: Sacrifice',
          subName: 'Sacrifice',
          price: '$100',
          date: 'October 22, 2020',
          src: './photos/spider-man.jpg',
          id: 1
      },
      {
          name: 'The Twilight Saga: Eclipse',
          subName: 'Eclipse',
          price: '$200',
          date: 'October 23, 2020',
          src: './photos/twilight-saga-elips.jpg',
          id: 2
      },
      {
          name: 'Thor: The Dark World',
          subName: 'The Dark World',
          price: '$500',
          date: 'October 24, 2020',
          src: './photos/thor.jpg',
          id: 3
      },
      {
          name: 'Iron Man 2',
          subName: '',
          price: '$1000',
          date: 'October 25, 2020',
          src: './photos/iron-man.jpg',
          id: 4
      },
  ]
  );

const lastMovieIndex = movies.length - 1;
const prevMovie = movies[lastMovieIndex].name;
 
const [movieName, setMovieName] = useState('');
const [watchDate, setWatchDate] = useState('');

const addMovieName = (event) => {
    event.preventDefault();
    setMovieName(event.target.value);
  }

const addWatchDate = (event) => {
  event.preventDefault();
  setWatchDate(event.target.value);
  
}
 const addNewMovie = (event) => {
   event.preventDefault();
   if(movieName !== "" && prevMovie !== movieName ) 
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        name: movieName,
        date: watchDate,
      }
])
  }

  const dateLocal = (new Date(watchDate)).toDateString();

  const totalMovies = movies.length;

  return (
    <>
        <NavigationBar movies={ totalMovies } time={ dateLocal } />
        <AddMovies addMovieName={ addMovieName } addMovie={ addNewMovie }
        addWatchDate={ addWatchDate }/>
        <MoviesList movies={ movies } />
        {/* <MoviesCards /> */}
    </>
  )
}

export default App;