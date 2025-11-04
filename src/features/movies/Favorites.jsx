import { useSelector } from "react-redux";
import { getLikedMovies } from "./movieSlice";
import MovieCard from "./MovieCard";
import { useLikedMoviesDetail } from "./useLikedMoviesDetail";
import Loader from "../../ui/Loader";

function Favorites() {
  const likedMovies = useSelector(getLikedMovies);
  const { isLoading, error } = useLikedMoviesDetail(likedMovies);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

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
