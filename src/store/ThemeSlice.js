import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {darkTheme: false},
    reducers:{
        setTheme(state, action){
            state.darkTheme = !state.darkTheme
        }
    }
})

export const themeSliceActions = themeSlice.actions

export default themeSlice;