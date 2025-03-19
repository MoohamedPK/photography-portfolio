import { createSlice } from "@reduxjs/toolkit";
import getImagesAct from "./actions/getImages";


const imagesSlice = createSlice({
  name: "media",
  initialState: {
    media: [],
    error: "" | null,
    loading: "idle" | "pending" | "succeeded" | "failed",
  },
  reducers: {
    cleanUpImagesState:  (state) => {
      state.media = []
    }
  },
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
  }
});

export const {cleanUpImagesState} = imagesSlice.actions;
export default imagesSlice.reducer;