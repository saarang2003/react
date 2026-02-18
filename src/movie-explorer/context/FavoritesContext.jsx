import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
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

export const useFavorites = () => useContext(FavoritesContext);
