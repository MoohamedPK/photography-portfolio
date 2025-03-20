import {createSlice} from "@reduxjs/toolkit"
import contactAction from "./actions/contactAction";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    message: "",
    error: "" | null,
    loading: "idle" | "pending" | "succeeded" | "failed",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contactAction.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });

    builder.addCase(contactAction.fulfilled, (state, action) => {
      state.error = null;
      state.loading = "succeeded";
      state.message = action.payload.message
    });

    builder.addCase(contactAction.rejected, (state, action) => {
      state.error = action.payload.message;
      state.loading = "failed";
    });
  }
});

export default contactSlice.reducer;