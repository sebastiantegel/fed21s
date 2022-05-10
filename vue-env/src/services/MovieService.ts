import { format } from "@/helpers/StringHelpers";
import { IMovie } from "@/models/IMovie";
import { IOmdbResponse } from "@/models/IOmdbResponse";
import axios from "axios";

export class MovieService {
  async getMovies(search: string): Promise<IMovie[]> {
    const apiValue = format(process.env.VUE_APP_API_URL, [
      process.env.VUE_APP_SECRET_API_KEY,
      search,
    ]);

    const response = await axios.get<IOmdbResponse>(apiValue);
    return response.data.Search;
  }
}
