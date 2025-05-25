import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isOpen: false,
        movieResults: null,
        keywordResults: null
    },
    reducers: {
        toggleSearch: (state, action) => { state.isOpen = !state.isOpen },
        updateResults: (state, action) => { 
            const { movieResults, keywordResults } = action.payload;
            state.movieResults = movieResults;
            state.keywordResults = keywordResults;
        }
    }
});

export const { toggleSearch, updateResults } = searchSlice.actions;

export default searchSlice.reducer;