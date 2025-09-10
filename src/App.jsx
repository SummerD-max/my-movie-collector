import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import MovieResult from "./pages/MovieResult";
import Welcome from "./pages/Welcome";
import MovieDetailPage from "./pages/MovieDetailPage";
import Favorites from "./features/movies/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/movieResult/:movieName" element={<MovieResult />} />
          <Route path="/movieDetail/:imdbId" element={<MovieDetailPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
