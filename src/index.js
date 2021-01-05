import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { movies } from "./MoviesContext";
import { MoviesContext } from "./MoviesContext";

ReactDOM.render(
  <MoviesContext.Provider value={movies}>
    <App />
  </MoviesContext.Provider>,
  document.getElementById("root")
);
