import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../config/backendUrl";
import axios from "axios";

const getImageById = createAsyncThunk(
  "media/getImageById",
  async (id, { rejectWithValue }) => {
    console.log(id)
    try {
      const res = await axios.get(`${baseUrl}/media/${id}`);
      return res.data.data
      
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export default getImageById;
