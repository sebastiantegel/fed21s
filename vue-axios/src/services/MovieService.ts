import { IMovie } from "./../models/IMovie";
import { IOmdbResponse } from "@/models/IOmdbResponse";
import axios from "axios";
import { IExtMovie } from "@/models/IExtMovie";

export class MovieService {
  async getMovies(): Promise<IMovie[]> {
    // return axios
    //   .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=Star")
    //   .then((response) => {
    //     return response.data.Search;
    //   });

    const response = await axios.get<IOmdbResponse>(
      "http://omdbapi.com/?apikey=416ed51a&s=Star"
    );
    return response.data.Search;
  }

  async getMovieById(id: string): Promise<IExtMovie> {
    const response = await axios.get<IExtMovie>(
      "http://omdbapi.com/?apikey=416ed51a&i=" + id
    );
    return response.data;
  }
}
