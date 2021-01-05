import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoviesContext } from "./moviesContext";

console.log(MoviesContext);

ReactDOM.render(
  <MoviesContext.Provider>
    <App />
  </MoviesContext.Provider>,
  document.getElementById("root")
);
