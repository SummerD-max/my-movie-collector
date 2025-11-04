import { useQueries } from "@tanstack/react-query";
import { getMovieById } from "../../services/apiMovies";

export function useLikedMoviesDetail(likedMovies) {
  const queries = likedMovies.map((movie) => ({
    queryKey: ["movieDetails", movie.imdbID],
    queryFn: () => getMovieById({ id: movie.imdbID }),
    enabled: !!movie?.imdbID,
    staleTime: 1000 * 60 * 60, // 可选：缓存 1 小时
  }));

  const results = useQueries({ queries });

  // 合并状态，保持 moviesDetail 与 likedMovies 顺序一致
  const moviesDetail = results.map((r) => r.data ?? null);
  const isLoading = results.some((r) => r.isLoading);
  const error = results.find((r) => r.error)?.error ?? null;

  return { moviesDetail, isLoading, error, results };
}
