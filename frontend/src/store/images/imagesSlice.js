import { createSlice } from "@reduxjs/toolkit";
import getImagesAct from "./actions/getImages";


const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    error: "" | null,
    loading: "idle" | "pending" | "succeeded" | "failed",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImagesAct.pending, (state) => {
      state.error = null
      state.loading = "pending"
    })

    builder.addCase(getImagesAct.fulfilled, (state, action) => {
      state.error = null;
      state.loading = "succeeded";
      state.images = action.payload.data
    });

      builder.addCase(getImagesAct.rejected, (state,  action) => {
      state.error = action.payload.message
      state.loading = "failed"
    })
  }
});

export default imagesSlice.reducer