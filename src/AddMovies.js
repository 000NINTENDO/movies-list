import React, {useState} from 'react';
import InputMovies from './InputMovies';
import './css/add-movies.css';

const AddMovies = (props) => {

    return (
        <>
        <form className="input-name" onSubmit={ props.addMovie }>
            
            <InputMovies />

            {/* <div className="test"></div>
            <input className="input-add-name" name="movie-name" 
            placeholder="Add Movie Name" onChange={ props.addMovieName }/>

            <div className="input-container">

                 <input type="datetime-local" className="input-add-name" name="movie-name" 
                placeholder="Add date for watching movie" onChange={ props.addWatchDate }/>

                <input type="file" className="input-add-name" name="movie-name" 
                placeholder="Add Movie Name"/>

            </div> */}

            <button className="button-add-name"type="submit">Add Name</button>
            
        </form>
        </>
    );
}

export default AddMovies;