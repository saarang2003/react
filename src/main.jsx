import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FavoriteProvider from "./movie-explorer/context/FavoriteProvider.jsx";

createRoot(document.getElementById("root")).render(
  <FavoriteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteProvider>,
);
