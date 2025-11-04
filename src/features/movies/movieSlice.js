import { createSlice } from "@reduxjs/toolkit";
import { searchMovieByName } from "../../services/apiMovies";

const initialState = {
  query: "",
  movies: [],
  isLoading: false,
  error: null,
  likedMovies: JSON.parse(localStorage.getItem("likedMovies")) || [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    movieLoading(state, action) {
      state.error = null;
      state.isLoading = true;
      state.query = action.payload;
    },
    movieError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.movies = [];
    },
    movieSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload;
    },
    addLikedMovie(state, action) {
      const exists = state.likedMovies.some(
        (movie) => movie.imdbID === action.payload.imdbID,
      );

      if (!exists) {
        state.likedMovies.push(action.payload);
        console.log("Movie added to favorites");
      } else {
        console.log("Movie already in favorites");
      }
    },
    removeLikedMovie(state, action) {
      state.likedMovies = state.likedMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID,
      );
    },
  },
});

// THUNK action creators 处理异步逻辑
export const fetchMoviesByName = (movieName) => {
  return async (dispatch, getState) => {
    try {
      dispatch(movieLoading(movieName));
      const movies = await searchMovieByName({ title: movieName });
      console.log(movies);
      if (!movies) {
        dispatch(movieError("No movies found"));
      } else {
        dispatch(movieSuccess(movies));
      }
    } catch (error) {
      console.log(error);
      dispatch(movieError(error.message));
    }
  };
};

// Thunk action creators 处理 localStorage
export const addMovieToFavorites = (movie) => {
  return (dispatch, getState) => {
    dispatch(addLikedMovie(movie));

    // 在 thunk 中处理 localStorage
    const state = getState();
    try {
      localStorage.setItem(
        "likedMovies",
        JSON.stringify(state.movieReducer.likedMovies),
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
};

export const removeMovieFromFavorites = (movie) => {
  return (dispatch, getState) => {
    dispatch(removeLikedMovie(movie));

    // 在 thunk 中处理 localStorage
    const state = getState();
    try {
      localStorage.setItem(
        "likedMovies",
        JSON.stringify(state.movieReducer.likedMovies),
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
};

// export reducer

const movieReducer = movieSlice.reducer;

export const {
  movieLoading,
  movieSuccess,
  movieError,
  addLikedMovie,
  removeLikedMovie,
} = movieSlice.actions;
export default movieReducer;

// Selector functions
const getMovies = (state) => state.movieReducer.movies;
const getMoviesCount = (state) => state.movieReducer.movies.length;
const getIsLoading = (state) => state.movieReducer.isLoading;
const getError = (state) => state.movieReducer.error;
const getLikedMovies = (state) => state.movieReducer.likedMovies;
const IsInLikedMovies = (movie) => (state) => {
  if (!movie) return false;
  // console.log(state.movieReducer.likedMovies);
  return state.movieReducer.likedMovies.some((likedMovie) => {
    return likedMovie.imdbID === movie.imdbID;
  });
};
const getMovieQuery = (state) => state.movieReducer.query;

export {
  getMovies,
  getIsLoading,
  getError,
  getLikedMovies,
  IsInLikedMovies,
  getMoviesCount,
  getMovieQuery,
};
