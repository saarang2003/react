import { useState } from "react";
import { fetchTrendingMovies, searchMovies } from "../api/movieService";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { Box, CircularProgress, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList.jsx";

export default function Home() {
  const { data: trending, loading, error } = useFetch(fetchTrendingMovies, []);
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query);

  const { data: searchResult } = useFetch(
    () => (debounceQuery ? searchMovies(debounceQuery) : []),
    [debounceQuery],
  );

  let movies = [];

  if (debounceQuery) {
    movies = searchResult || [];
  } else {
    movies = trending || [];
  }

  return (
    <Box>
      <SearchBar query={query} setQuery={setQuery} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, mr: 1 }}>
        {trending ? "Trending Movies" : "New Movies"}
      </Typography>

      <MovieList movies={movies} />
    </Box>
  );
}
