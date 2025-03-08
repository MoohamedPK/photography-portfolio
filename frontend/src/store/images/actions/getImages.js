import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const getImagesAct = createAsyncThunk("images/getImagesAct", async(_, {rejectWithValue}) => {

    try {
        const res = await axios.get('http://localhost:3000/api/upload')
        return res.data
        
    } catch (error) {
        rejectWithValue(error);
    }
});

export default getImagesAct;