import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import { Clapperboard, HeartPlus } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        {/* Logo / Home */}
        <Clapperboard />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Movie Explorer
        </Typography>

        {/* Favorites Link */}
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/favorites"
            startIcon={
              <Badge badgeContent={favorites.length} color="error">
                <HeartPlus />
              </Badge>
            }
          >
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
