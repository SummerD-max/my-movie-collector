import { useSelector } from "react-redux";
import { getLikedMovies } from "./movieSlice";
import MovieDetail from "./MovieDetail";
import MovieCard from "./MovieCard";

function Favorites() {
  const likedMovies = useSelector(getLikedMovies);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Your Favorite Movies</h2>
      {/* Movie list will go here */}
      <ul className="mt-5 grid grid-cols-1 gap-6 md:gap-6 lg:grid-cols-2">
        {likedMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
