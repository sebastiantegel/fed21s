import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { Button, SaveButton } from "./components/StyledComponents/Button";
import {
  StyledInput,
  StyledPassword,
} from "./components/StyledComponents/Inputs";
import {
  defaultValue,
  IMovieClickable,
  MovieContext,
} from "./contexts/MovieContext";
import { IMovie } from "./models/IMovie";

function App() {
  const [clickableMovies, setClickableMovies] =
    useState<IMovieClickable>(defaultValue);

  useEffect(() => {
    if (clickableMovies.movies.length !== 0) return;

    fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
      .then((response) => response.json())
      .then((data) => setClickableMovies({ ...clickableMovies, movies: data }));
  });

  clickableMovies.selectMovie = (id: number) => {
    let movies = [...clickableMovies.movies];

    movies[movies.findIndex((m) => m.id === id)].hasBeenClick =
      !movies[movies.findIndex((m) => m.id === id)].hasBeenClick;

    setClickableMovies({ ...clickableMovies, movies: movies });
  };

  return (
    <MovieContext.Provider value={clickableMovies}>
      <div className="App">
        <Button>Spara</Button>
        <SaveButton>Skicka</SaveButton>
        <Button color="red" background="grey">
          Avbryt
        </Button>

        <StyledInput></StyledInput>
        <StyledPassword></StyledPassword>

        <Movies></Movies>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
