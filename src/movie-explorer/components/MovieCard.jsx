import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useFavorites } from "../context/FavoritesContext";

function MovieCard({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  console.log("Favorites now:", favorites);
  const isFav = favorites.some((m) => m.id === movie.id);

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {movie.title}
        </Typography>

        <Typography>{movie.release_date}</Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/movie/${movie.id}`}
        >
          Details
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() =>
            isFav ? removeFavorite(movie.id) : addFavorite(movie)
          }
          color={isFav ? "error" : "primary"}
        >
          {isFav ? "Remove Fav" : "Add Fav"}
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(MovieCard);
