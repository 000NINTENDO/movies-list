import React from 'react';

const DisplayMovies = (props) => {
    return (
        <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        </div>
    )
}

export default DisplayMovies;