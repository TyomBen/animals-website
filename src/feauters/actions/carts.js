import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../Utills/constants";

export const gettingData = createAsyncThunk (
    'carts/gettingData',
    async (_, thunkAPI) => {
        try {
            const response = await axios (`${URL}`);
            return response.data
        }catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue()
        }
    }
)
