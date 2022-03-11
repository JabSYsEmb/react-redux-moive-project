import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    trending: [],
    bookmark: [],
    movies: [],
    genres: [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }],
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
export const fetchMovieByGenre = createAsyncThunk("movies/fetchMovieByGenre", (g) => {
    return fetch(`${process.env.REACT_APP_API_URI}/3/discover/movie?api_key=a6aabece5f1d90556900911893bad51f&sort_by=primary_release_date.desc&include_adult=false&include_video=false&language=en-US&vote_average.gte=2&page=1&primary_release_date.gte=2000&primary_release_date.lte=2022&api_key=${process.env.REACT_APP_API_KEY}&with_genres=${g}`)
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
            state.bookmark = state.bookmark.filter(e => e.id !== action.payload);
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
        },
        [fetchMovieByGenre.fulfilled](state, action) {
            state.status = "succeeded";
            state.movies = action.payload.results;
        },
        [fetchMovieByGenre.pending](state) {
            state.status = "loading";
        },
        [fetchMovieByGenre.error](state) {
            state.status = "failed";
            state.error = "Failed to get Movies from The API"
        }
    }
});

export const { addToBookmark, removeBookmark } = moviesSlice.actions;
export default moviesSlice.reducer;