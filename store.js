import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./src/features/movies/movieSlice";

const store = configureStore({
  reducer: { movieReducer },
});

export default store;
