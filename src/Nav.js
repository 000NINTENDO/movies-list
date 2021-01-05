import React from 'react';
import './css/navigation.css'

const NavigationBar = (props) => {

    const movies = props.movies;

    return (
        <>
        <div className="nav-bar">
            <div>
                <h1>Movies</h1>
                <p>List of all your Favorites</p>
            </div>

            <div>
                <h1>Todays watch list</h1>
                <p>{movies} Movies</p>
            </div>
        </div>
        </>
    );
}

export default NavigationBar;