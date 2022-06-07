import { IMovie } from "../models/IMovie";
import { StyledHeading } from "./StyledComponents/Headings";
import { StyledImage } from "./StyledComponents/Images";
import { ImageWrapper, MovieWrapper } from "./StyledComponents/Wrappers";

interface IMovieProps {
  movie: IMovie;
  click(id: number): void;
}

export const Movie = (props: IMovieProps) => {
  return (
    <MovieWrapper
      onClick={() => props.click(props.movie.id)}
      selected={props.movie.hasBeenClick}
    >
      <StyledHeading>{props.movie.name}</StyledHeading>
      <ImageWrapper>
        <StyledImage
          src={props.movie.imageUrl}
          alt={props.movie.name}
        ></StyledImage>
      </ImageWrapper>
    </MovieWrapper>
  );
};
