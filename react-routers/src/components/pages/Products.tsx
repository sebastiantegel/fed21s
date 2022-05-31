import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMovie, { IOmdbResponse } from "../../models/IMovie";

export const Products = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (movies.length !== 0) return;

    axios
      .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=Star")
      .then((data) => {
        setMovies(data.data.Search);
      });
  });

  return (
    <>
      {movies.map((movie) => {
        return (
          <Link to={"/product/" + movie.imdbID} key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </Link>
        );
      })}
    </>
  );
};
