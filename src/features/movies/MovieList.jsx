import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loader from "../../ui/Loader";

function MovieList() {
  const movies = useSelector((state) => state.movieReducer.movies);
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
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
