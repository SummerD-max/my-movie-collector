import { useNavigate, useParams } from "react-router";
import { useMovieDetails } from "./useMovieDetails";
import Loader from "../../ui/Loader";
import {
  addLikedMovie,
  addMovieToFavorites,
  IsInLikedMovies,
  removeLikedMovie,
  removeMovieFromFavorites,
} from "./movieSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";

function MovieDetail() {
  const { imdbId } = useParams();

  const { movieDetail, isLoading, error } = useMovieDetails(imdbId);

  const isInLikedMovies = useSelector(IsInLikedMovies(movieDetail));

  console.log(isInLikedMovies);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Ratings,
    Runtime,
    Title,
    Type,
    Year,
    imdbID,
    imdbRating,
  } = movieDetail || {};

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* Go back button */}
      <button
        className="mb-2 cursor-pointer rounded-full bg-purple-300 px-4 py-2 text-sm text-purple-700 transition-all duration-300 hover:bg-purple-400"
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </button>

      <div className="rounded-2xl bg-purple-100">
        {/* Movie Header */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <img
            src={Poster}
            alt={`Poster of ${Title}`}
            className="h-64 w-full rounded-2xl object-cover object-center sm:h-52 sm:w-auto"
          />
          <div>
            <h2 className="mb-3 text-xl font-bold">
              {Title}({Year})
            </h2>
            <div className="space-y-2">
              <p className="space-x-1 text-sm">
                <span>🏆</span>
                <span>Award: {Awards}</span>
              </p>
              <p className="space-x-1 text-sm">
                <span>🌍</span>
                <span>Country: {Country}</span>
              </p>
              <p className="space-x-1 text-sm">
                <span>🗣️</span>
                <span>Language: {Language}</span>
              </p>
              <p className="space-x-1 text-sm">
                <span>⏳</span>
                <span>Runtime: {Runtime}</span>
              </p>
              <p className="space-x-1 text-sm">
                <span>🎬</span>
                <span>Type: {Type}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="space-y-2 p-4">
          <p>
            <strong>Plot:</strong> <span className="italic">{Plot}</span>
          </p>
          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p>
            <strong>Cast:</strong> {Actors}
          </p>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Year:</strong> {Year}
          </p>
          <p>
            <strong>IMDB Rating:</strong> {imdbRating}
          </p>
        </div>
      </div>

      {/* Add to/Remove from favorites button */}
      <div className="mt-5 flex justify-center">
        {isInLikedMovies && (
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() => dispatch(removeMovieFromFavorites(movieDetail))}
              type="secondary"
            >
              Remove from Favorites
            </Button>
            <p className="text-sm text-gray-500">
              Come{" "}
              <button
                onClick={() => navigate("/favorites")}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                here
              </button>{" "}
              to see your favorite movies!
            </p>
          </div>
        )}

        {!isInLikedMovies && (
          <Button
            type="primary"
            onClick={() => dispatch(addMovieToFavorites(movieDetail))}
          >
            Add to Favorites
          </Button>
        )}
      </div>
    </>
  );
}

export default MovieDetail;
