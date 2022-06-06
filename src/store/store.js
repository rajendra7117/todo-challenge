import { configureStore } from "@reduxjs/toolkit";
import listItemsSlice from "./ListItemsSlice";
import themeSlice from "./ThemeSlice";


const store = configureStore({
    reducer:{
        list:listItemsSlice.reducer,
        theme: themeSlice.reducer
    }
})

export default store