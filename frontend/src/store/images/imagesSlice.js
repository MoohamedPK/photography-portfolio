import { createSlice } from "@reduxjs/toolkit";
import getImagesAct from "./actions/getImages";
import getImageById from "./actions/getImageById";

const imagesSlice = createSlice({
  name: "media",
  initialState: {
    media: [],
    currentMedia: [],
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
      state.media = action.payload.data
    });

      builder.addCase(getImagesAct.rejected, (state,  action) => {
      state.error = action.payload.message
      state.loading = "failed"
    })

    //GET IMAGE BY ID 
    builder.addCase(getImageById.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });

    builder.addCase(getImageById.fulfilled, (state, action) => {
      state.error = null;
      state.loading = "succeeded";
      state.currentMedia = action.payload
    });

    builder.addCase(getImageById.rejected, (state, action) => {
      state.error = action.payload.message;
      state.loading = "failed";
    });
  }
});

export default imagesSlice.reducer;