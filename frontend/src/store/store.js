import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "../store/images/imagesSlice"
import contactSlice from "./contact/contactSlice"

const store = configureStore({
    reducer: {
        images : imagesSlice,
        contact: contactSlice,
    }
})


export default store;