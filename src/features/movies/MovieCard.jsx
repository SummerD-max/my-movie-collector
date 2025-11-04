import EmptyCard from "../../ui/EmptyCard";
import { Link } from "react-router";
import { useMovieDetails } from "./useMovieDetails";

function MovieCard({ movie }) {
  const { movieDetail, isLoading, error } = useMovieDetails(movie.imdbID);

  if (isLoading) return <EmptyCard />;
  if (error) return <div>Error: {error.message}</div>;

  const {
    Title: title,
    Poster: poster,
    Type: type,
    Year: year,
    imdbID: imdbId,
  } = movie;

  const movieDescription = movieDetail.Plot;

  if (isLoading) {
    return <EmptyCard />;
  }

  return (
    <Link
      className="flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl bg-purple-100 transition-all duration-300 hover:scale-105"
      to={`/movieDetail/${imdbId}`}
    >
      <img
        src={poster}
        alt={`Poster of ${title}`}
        className="h-40 w-28 flex-shrink-0 object-cover"
      />
      <div className="card-content flex flex-col gap-1.5">
        <h3 className="text-md font-semibold text-purple-500 hover:text-purple-700 sm:text-lg">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-purple-400 italic">{year}</span>
          <span>&bull;</span>
          <span className="text-purple-400 italic">{type}</span>
        </div>

        <p className="line-clamp-3 text-xs sm:text-sm lg:line-clamp-2">
          {movieDescription}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
