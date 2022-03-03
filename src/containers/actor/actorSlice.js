import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    actors: [],
    status: 'idle',
    error: null
}

const fetchActors = createAsyncThunk(
    "actors/fetchActors",
    (p = 1) => {
        return fetch(`${process.env.REACT_APP_API_URI}/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${p}`)
            .then(resp => resp.json())
            .then(data => data);
    }
);

const actorsSlice = createSlice({
    name: "actors",
    initialState,
    extraReducers: {
        [fetchActors.fulfilled](state, action) {
            state.status = "succeeded";
            state.actors = action.payload;
        },
        [fetchActors.pending](state) {
            state.status = "loading";
        },
        [fetchActors.error](state) {
            state.status = "failed";
            state.error = "Failed to get data from The API"
        },
    }
});

export default actorsSlice.reducer;