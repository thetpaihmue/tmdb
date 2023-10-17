import BaseUrl from "./BaseUrl";
import { AxiosResponse } from "axios";

const popularMoviesApi = "/movie/popular?language=en-US&page={page}";
const movieDetailApi = "/movie/{movie_id}?language=en-US";
const searchMovieApi =
  "search/movie?query={searchTerm}&include_adult=false&language=en-US&page=1";

const popularMovies = (page: string): Promise<AxiosResponse> => {
  return BaseUrl.get(popularMoviesApi.replace("{page}", page));
};

const movieDetail = (id: string): Promise<AxiosResponse> => {
  return BaseUrl.get(movieDetailApi.replace("{movie_id}", id));
};

const searchMovie = (searchTerm: string): Promise<AxiosResponse> => {
  return BaseUrl.get(searchMovieApi.replace("{searchTerm}", searchTerm));
};

export { popularMovies, movieDetail, searchMovie };
