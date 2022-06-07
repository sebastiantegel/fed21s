import { createContext } from "react";
import { IMovie } from "../models/IMovie";

export interface IMovieClickable {
  movies: IMovie[];
  selectMovie(id: number): void;
}

export const defaultValue: IMovieClickable = {
  movies: [],
  selectMovie: (id: number) => {},
};

export const MovieContext = createContext(defaultValue);
