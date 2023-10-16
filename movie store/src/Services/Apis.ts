import BaseUrl from "./BaseUrl";
import { AxiosResponse } from "axios";

const popularMoviesApi = "/movie/popular?language=en-US&page=1";

const popularMovies = (): Promise<AxiosResponse> => {
  return BaseUrl.get(popularMoviesApi);
};

export { popularMovies };
