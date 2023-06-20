import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../Utills/constants";
import { sleep } from "./helper";

export const gettingData = createAsyncThunk (
    'carts/gettingData',
    async (_, thunkAPI) => {
        try {
            const response = await axios (`${URL}cardsList.json`);
            return response.data
        }catch (eror) {
            console.log(eror);
            return thunkAPI.rejectWithValue()
        }
    }
)
