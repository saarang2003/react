import axios from "axios";

const BASE_URL = "Your base url";
const API_KEY = "Your api key";

export const fetchTrendingMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  );
  console.log(res);
  return res.data.results;
};

export const fetchMovieById = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  );
  console.log("movie detaile output ", res?.data); // 👈 check this
  return res?.data;
};

export const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return res.data.results;
};

fetchMovieById(1317288);
