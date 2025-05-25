import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleSearch: (state, action) => { state.isOpen = !state.isOpen }
    }
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;