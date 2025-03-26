import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "../store/images/imagesSlice"
import contactSlice from "./contact/contactSlice"

const store = configureStore({
    reducer: {
        media : imagesSlice,
        contact: contactSlice,
    }
})


export default store;