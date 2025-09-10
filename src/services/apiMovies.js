const API_KEY = "80cbbd7b";

export const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovieByName({ title }) {
  const response = await fetch(`${BASE_URL}&s=${title}`);
  const moviesInfo = await response.json();
  return moviesInfo.Search;
}

export async function fetchMovieDetail({ id }) {
  try {
    const response = await fetch(`${BASE_URL}&i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
}
