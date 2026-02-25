import { Box, Typography } from "@mui/material";
import { useFavorites } from "../context/FavoritesContext";
import MovieList from "../components/MovieList.jsx";

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Favorites
      </Typography>

      {favorites.length === 0 ? (
        <Typography>You haven't added any favorites yet.</Typography>
      ) : (
        <MovieList movies={favorites} />
      )}
    </Box>
  );
}
