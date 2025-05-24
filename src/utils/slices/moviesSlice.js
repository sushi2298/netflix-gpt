import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        trailer: null
    },
    reducers: {
        addNowMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        }
    }
})

export const { addNowMovies, addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;