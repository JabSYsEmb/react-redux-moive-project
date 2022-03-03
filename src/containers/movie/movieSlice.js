import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    trending: [],
    bookmark: [],
    movies: [],
    status: 'idle',
    error: null
};

export const initialMovies = createAsyncThunk("movies/initialMovies", () => {
    return Promise.all([
        fetch(`${process.env.REACT_APP_API_URI}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json()),
        fetch(`${process.env.REACT_APP_API_URI}/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json()),
    ]);
});
export const fetchMovie = createAsyncThunk("movies/fetchMovie", (p) => {
    return fetch(`${process.env.REACT_APP_API_URI}/3/discover/movie?api_key=a6aabece5f1d90556900911893bad51f&sort_by=primary_release_date.desc&include_adult=false&include_video=false&language=en-US&vote_average.gte=2&page=${p}&primary_release_date.gte=2000&primary_release_date.lte=2022&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(resp => resp.json())
        .then(data => data);
});
export const fetchSearchMovie = createAsyncThunk("movies/fetchSearchMovie", (search) => {
    return fetch(`${process.env.REACT_APP_API_URI}/3/search/movie?query=${search}&language=en-US&page=1&include_adult=false&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(resp => resp.json())
        .then(data => data);
});

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addToBookmark(state, action) {
            state.bookmark.push(action.payload);
        },
        removeBookmark(state, action) {
            state.bookmark.pop(action.payload);
        }
    },
    extraReducers: {
        [initialMovies.fulfilled](state, action) {
            state.status = "succeeded";
            state.popular = action.payload[0].results;
            state.trending = action.payload[1].results;
        },
        [initialMovies.pending](state) {
            state.status = "loading";
        },
        [initialMovies.error](state) {
            state.status = "failed";
            state.error = "Failed to get initial data from The API"
        },
        [fetchMovie.fulfilled](state, action) {
            state.status = "succeeded";
            state.movies = action.payload.results;
            console.log(action.payload.results);
        },
        [fetchMovie.pending](state) {
            state.status = "loading";
        },
        [fetchMovie.error](state) {
            state.status = "failed";
            state.error = "Failed to get Movies from The API"
        },
        [fetchSearchMovie.fulfilled](state, action) {
            state.status = "succeeded";
            state.movies = action.payload.results;
        },
        [fetchSearchMovie.pending](state) {
            state.status = "loading";
        },
        [fetchSearchMovie.error](state) {
            state.status = "failed";
            state.error = "Failed to get Movies from The API"
        }
    }
});

export const { addToBookmark, removeBookmark } = moviesSlice.actions;
export default moviesSlice.reducer;