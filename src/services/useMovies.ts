import { AxiosResponse } from "axios";
import useSWR from "swr";

import { ListMovies, Movie, ReturnApi } from "../interfaces";
import { apiMovies } from "./apiMovies";

interface Response {
  movies: Array<Movie>;
  isLoading: boolean;
  isError: boolean;
}

export const useMovies = (): Response => {
  const { data: response, error } = useSWR<
    AxiosResponse<ReturnApi<ListMovies>>
  >("list_movies.json", apiMovies);
  const data = response?.data;
  console.log(data, error);

  if (!data ?? !(data?.status === "ok" && !!data?.data))
    return {
      movies: [],
      isError: true,
      isLoading: !!error,
    };
  const movies = data.data?.movies;
  return {
    movies: movies ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};
