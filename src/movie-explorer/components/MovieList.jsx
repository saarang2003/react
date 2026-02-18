import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import React from "react";

function MovieList({ movies }) {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
