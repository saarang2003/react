import { useEffect } from "react";
import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(movie) {
    setFavorites((prev) => [...prev, movie]);
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
