import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../constants";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: languages[1].id
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;