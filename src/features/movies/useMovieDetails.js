import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../services/apiMovies";

export function useMovieDetails(id) {
  const {
    data: movieDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieById({ id }),
  });

  return { movieDetail, isLoading, error };
}
