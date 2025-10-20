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
import MoviePlayground from "./MoviePlayground";
import { FcDislike, FcLike } from "react-icons/fc";
import { FiAward } from "react-icons/fi";
import { FaClock, FaEarthAmericas, FaLanguage } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";

function MovieDetail() {
  const { imdbId } = useParams();

  const { movieDetail, isLoading, error } = useMovieDetails(imdbId);
  console.log(movieDetail);

  const isInLikedMovies = useSelector(IsInLikedMovies(movieDetail));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

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

  return (
    <div className="flex flex-col items-start">
      {/* Go back button */}
      <button
        className="mb-2 cursor-pointer rounded-full bg-purple-300 px-4 py-2 text-sm text-purple-700 transition-all duration-300 hover:bg-purple-400"
        onClick={() => navigate(-1)}
      >
        &larr; Go Back
      </button>

      <MoviePlayground />

      <div className="rounded-2xl bg-purple-100">
        {/* Movie Header */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <img
            src={Poster}
            alt={`Poster of ${Title}`}
            className="hidden h-64 w-full rounded-2xl object-cover object-center sm:block sm:h-52 sm:w-auto"
          />
          <div className="mt-3">
            <h2 className="mb-3 text-xl font-bold">
              {Title}({Year})
            </h2>
            <div className="space-y-2">
              <p className="flex items-center space-x-1 text-sm">
                <span>
                  <FiAward />
                </span>
                <span>Award: {Awards}</span>
              </p>
              <p className="flex items-center space-x-1 text-sm">
                <span>
                  <FaEarthAmericas />
                </span>
                <span>Country: {Country}</span>
              </p>
              <p className="flex items-center space-x-1 text-sm">
                <span>
                  <FaLanguage />
                </span>
                <span>Language: {Language}</span>
              </p>
              <p className="flex items-center space-x-1 text-sm">
                <span>
                  <FaClock />
                </span>
                <span>Runtime: {Runtime}</span>
              </p>
              <p className="flex items-center space-x-1 text-sm">
                <span>
                  <MdMovie />
                </span>
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
      <div className="mt-5 self-center">
        {isInLikedMovies && (
          <div className="flex flex-col items-center gap-2">
            <Button
              onClick={() => dispatch(removeMovieFromFavorites(movieDetail))}
              type="secondary"
            >
              <span>
                <FcDislike />
              </span>
              <span>Remove from Favorites</span>
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
            <span>
              <FcLike />
            </span>
            <span>Add to Favorites</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
