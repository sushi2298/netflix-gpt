import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        trailer: null,
        popular: null,
        topRated: null
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        },
        addPopular: (state, action) => {
            state.popular = action.payload
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload
        },
    }
})

export const { addNowMovies, addTrailer, addPopular, addTopRated } = moviesSlice.actions;

export default moviesSlice.reducer;