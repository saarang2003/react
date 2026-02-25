import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import MovieDetails from "../page/MovieDetails";
import Favorites from "../page/Favorites";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
