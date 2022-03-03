import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    trending: [],
    bookmark: [],
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
        [initialMovies.error](state, action) {
            state.status = "failed";
            state.error = "Failed to get data from The API"
        }
    }
});

export const { addToBookmark, removeBookmark } = moviesSlice.actions;
export default moviesSlice.reducer;