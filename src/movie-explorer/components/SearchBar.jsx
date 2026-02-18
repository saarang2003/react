import { TextField, Box } from "@mui/material";

export default function SearchBar({ query, setQuery }) {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search movies..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  );
}
