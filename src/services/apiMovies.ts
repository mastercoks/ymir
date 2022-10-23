import axios from "axios";

import { MOVIES_URL } from "../utils";

const apiMovies = axios.create({
  baseURL: MOVIES_URL,
});

apiMovies.interceptors.response.use(
  (config) => config,
  (error) => {
    const data = error.response;
    return Promise.reject(new Error(data?.status_message ?? "Erro"));
  }
);

export { apiMovies };
