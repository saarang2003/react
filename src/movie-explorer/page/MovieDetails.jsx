import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7e98c37a068365fec85ba67df4900c0b`;
        console.log("Calling URL:", url);

        const res = await axios.get(url, {
          headers: { Accept: "application/json" },
        });

        console.log("Movie data:", res.data);
        setLoading(false);
        setMovie(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setError("");
      }
    };

    fetchMovie();
  }, [id]);

  console.log("Movie ID from params:", id);

  console.log("movie from movie detailes page", movie);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!movie) return null;

  const isFav = favorites.some((m) => m.id === movie.id);

  return (
    <Box sm={{ p: 3 }}>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back
      </Button>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h4" gutterBottom>
            {movie.title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            {movie.overview}
          </Typography>

          <Typography variant="subtitle1">
            Release: {movie.release_date}
          </Typography>

          <Typography variant="subtitle1">
            Rating: ⭐ {movie.vote_average}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 1,
            }}
          >
            <Typography variant="subtitle1">Genres:</Typography>
            {movie.genres?.map((genre) => (
              <Chip key={genre.id} label={genre.name} />
            ))}
          </Box>

          <Typography variant="subtitle1">
            Languages:{" "}
            {movie.spoken_languages?.map((langauge) => (
              <Chip
                key={langauge.id}
                label={langauge.english_name}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Typography>

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            color={isFav ? "error" : "primary"}
            onClick={() =>
              isFav ? removeFavorite(movie.id) : addFavorite(movie)
            }
          >
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
