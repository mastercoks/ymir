import { AxiosError, AxiosResponse } from "axios";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

import { ListMovies, Movie, ReturnApi } from "../interfaces";
import { apiMovies } from "../services";

interface Params {
  limit?: number;
  page?: number;
  quality?: "720p" | "1080p" | "2160p" | "3D";
  minimum_rating?: number;
  query_term?: string;
  genre?: string;
  sort_by?:
    | "title"
    | "year"
    | "rating"
    | "peers"
    | "seeds"
    | "download_count"
    | "like_count"
    | "date_added";
  order_by?: "desc" | "asc";
  with_rt_ratings?: boolean;
}

interface Response {
  movies: Array<Movie>;
  isLoading: boolean;
  isError: boolean;
}

export const useMovies = (params: Params): Response => {
  const url = "list_movies.json";
  const { data, error } = useSWR<ListMovies, AxiosError<Error>>(
    { url, params },
    apiMovies
  );
  return {
    movies: data?.movies ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

// A função para obter a chave SWR de cada página,
// o valor retornado será aceito pela função `fetcher`.
// Se o valor `null` é retornado, a solicitação da página não iniciará.
const getKey = (pageIndex: any, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // atingiu o fim
  return `list_movies.json?page=${pageIndex}`; // chave SWR
};

interface Response2 {
  movies: Array<Movie>;
  isLoadingMore: boolean;
  isReachingEnd: boolean;
  isRefreshing: boolean;
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<any[] | undefined>;
}

export const useMoviesTest = (params: Params): Response2 => {
  const { data: response, error, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    apiMovies
  );
  const data: any = response;
  const movies = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    !!(size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || !!(data && data[data.length - 1]?.length < 200);
  const isRefreshing = isValidating && data && data.length === size;
  return {
    movies,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    size,
    setSize,
  };
};
