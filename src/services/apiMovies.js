const API_KEY = "80cbbd7b";
const BASE_URL = "https://www.omdbapi.com"; // 👈 改为 https://

export async function searchMovieByName({ title }) {
  try {
    const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${title}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }

    return data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
}

export async function getMovieById({ id }) {
  try {
    const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}
