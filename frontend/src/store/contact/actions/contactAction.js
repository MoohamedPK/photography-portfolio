import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../../config/backendUrl"

const contactAction = createAsyncThunk("contact/contactAction", async (formData, {rejectWithValue}) => {

    try {
        const response = await axios.post(`${baseUrl}/contact`, formData);
        console.log(response.data)
        return response.data

    } catch (error) {
        rejectWithValue(error)
    }
});

export default contactAction