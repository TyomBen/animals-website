import { createSlice } from "@reduxjs/toolkit";
import { gettingData } from "../actions/carts";

const cartsSlice = createSlice ({
    name : 'carts',
    initialState : {
        data : [],
        isloading : false,
        errors : null,
        initialValue : '',
        maunt : 0,
        count : 0,
        newfilterData : [],
        newArray : []
    },
    reducers : {
        handleItemAdd (state, action) {
            state.newfilterData = state.data.filter ((item) => item.articul === action.payload);
            state.newArray.push (...state.newfilterData)
            state.maunt = state.newArray.length;
            console.log(state.newfilterData);
        },
        handleCountIcrement (state) {
            state.count += 1;
        },
        handleCountDecrement (state) {
            if (state.count){
                state.count -= 1;
            }
        },
    },
 
    extraReducers : {
        [gettingData.pending] : (state) => {
            state.isloading = true;
        },
        [gettingData.fulfilled] : (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        },
        [gettingData.rejected] : (state, action) => {
            state.isloading = false;
            state.errors = action.payload;
        },
        
    },
});

export const { handleAddCartClick, handleItemAdd, handleCountIcrement, handleCountDecrement} = cartsSlice.actions;

export default cartsSlice.reducer;