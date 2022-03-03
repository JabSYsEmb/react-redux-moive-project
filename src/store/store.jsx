import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../containers/movie/movieSlice";
import actorsReducer from "../containers/actor/actorSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        actors: actorsReducer
    },
});

export default store;