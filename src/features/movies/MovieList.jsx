import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loader from "../../ui/Loader";
import { useSearchParams } from "react-router";
import { itemsPerPage } from "../pagination/Pagination";

function MovieList() {
  const [searchParams] = useSearchParams();
  const currentPage = +searchParams.get("page") || 1;
  const movies = useSelector((state) => state.movieReducer.movies);
  const moviesThisPage = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const isLoading = useSelector((state) => state.movieReducer.isLoading);
  const error = useSelector((state) => state.movieReducer.error);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="mt-5 grid grid-cols-1 gap-6 md:gap-6 lg:grid-cols-2">
      {moviesThisPage.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
