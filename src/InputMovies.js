import React, { useEffect } from 'react';
import './css/input-movies.css';

const InputMovies = () => {

    

    

    React.useEffect(() => {
        const inputName = document.querySelector('#input');
        const spaceHolder = document.querySelector(".spaceholder");

        const handleFocus = () => {
            // spaceHolder.style.transform = "translateY(-20px)";
            // spaceHolder.style.fontSize = "10px";
            spaceHolder.classList.add("spaceholder-focus");
        }

        const handleBlur = (event) => {
            if( event.target.value === "" ) {
                // spaceHolder.style.transform = "translateY(0px)";
                // spaceHolder.style.fontSize = "13px";
                spaceHolder.classList.remove("spaceholder-focus");
            }
        }

        inputName.addEventListener('focus', handleFocus);
        inputName.addEventListener('blur', handleBlur);
        

    });

    

   

    return (
        <>
        <div className="input-container">
            <div className="input-name-container">
                <input id="input" className="input-add-name" name="movie-name" 
                placeholder="" />
                <div className="spaceholder">Add new Movies here !</div>
            </div>
        </div>
        </>
    )
}

export default InputMovies;