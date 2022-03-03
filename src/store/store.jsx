import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../containers/movie/movieSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer
    },
});

export default store;