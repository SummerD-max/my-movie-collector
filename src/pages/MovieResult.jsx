import MovieList from "../features/movies/MovieList";
import Pagination from "../features/pagination/Pagination";
import { useEffect } from "react";
import {
  fetchMoviesByName,
  getMovieQuery,
} from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";

function MovieResult() {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get("query");
  const dispatch = useDispatch();
  const query = useSelector(getMovieQuery);

  useEffect(
    function () {
      if (movieName === query) return;
      dispatch(fetchMoviesByName(movieName));
    },
    [movieName, dispatch, query],
  );

  return (
    <div className="space-y-5">
      <MovieList />
      <Pagination />
    </div>
  );
}

export default MovieResult;
