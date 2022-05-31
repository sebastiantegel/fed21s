import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExtendedMovie } from "../../models/IMovie";

export const Product = () => {
  const [movie, setMovie] = useState<ExtendedMovie>({
    Title: "",
    Plot: "",
    Ratings: [],
    Actors: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    axios
      .get<ExtendedMovie>(
        "http://www.omdbapi.com/?apikey=416ed51a&i=" + params.id
      )
      .then((data) => {
        setIsLoading(false);
        setMovie(data.data);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <>Laddar...</>
      ) : (
        <>
          <h3>{movie.Title}</h3>
          <ul>
            {movie.Ratings.map((rating) => {
              return (
                <li key={rating.Source}>
                  {rating.Source} - {rating.Value}
                </li>
              );
            })}
          </ul>
          Plot: {movie.Plot}
        </>
      )}
    </>
  );
};
