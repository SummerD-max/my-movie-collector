import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../../services/apiMovies";

export function useMovieDetails(id) {
  const {
    data: movieDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetail({ id }),
  });

  return { movieDetail, isLoading, error };
}
