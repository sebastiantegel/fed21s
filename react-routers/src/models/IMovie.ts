export default interface IMovie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export interface IOmdbResponse {
  Search: IMovie[];
}

interface Rating {
  Source: string;
  Value: string;
}

export interface ExtendedMovie {
  Plot: string;
  Title: string;
  Ratings: Rating[];
  Actors: string;
}
