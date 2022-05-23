import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (movies.length !== 0) return;

    axios
      .get<IMovie[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      )
      .then((response) => {
        setMovies(response.data);
      });
  });

  useEffect(() => {
    console.log("When movies change");
  }, [movies]);

  useEffect(() => {
    console.log("When something happens");
  });

  useEffect(() => {
    console.log("When show change");
  }, [show]);

  return (
    <>
      <div>
        {movies.map((movie) => {
          return <div key={movie.id}>{movie.name}</div>;
        })}
      </div>
    </>
  );
};
