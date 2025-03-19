import {createAsyncThunk} from "@reduxjs/toolkit"
import { baseUrl } from "../../../config/backendUrl";
import axios from "axios";

const getImagesAct = createAsyncThunk("media/getImagesAct", async(_, {rejectWithValue}) => {

    try {
        const res = await axios.get(`${baseUrl}/media`);
        return res.data
        
    } catch (error) {
        rejectWithValue(error);
    }
});

export default getImagesAct;