import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Movie } from "./Movie";
import { StyledWrapper } from "./StyledComponents/Wrappers";

export const Movies = () => {
  const movies = useContext(MovieContext);

  console.log(movies.movies);

  return (
    <StyledWrapper>
      {movies.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movie={movie}
            click={movies.selectMovie}
          ></Movie>
        );
      })}
    </StyledWrapper>
  );
};
