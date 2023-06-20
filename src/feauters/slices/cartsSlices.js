import { createSlice } from "@reduxjs/toolkit";
import { gettingData } from "../actions/carts";
import { gettingLsBasket, gettingLsFavourite} from "../../getItemLS";
const cartsSlice = createSlice ({
    name : 'carts',
    initialState : {
        data : [],
        dataPromo : [],
        isloading : false,
        errors : null,
        initialValue : '',
        maunt : 0,
        count : 0,
        mauntFavouriteCategory : 0,
        newfilterData : [],
        newArray : gettingLsBasket (),
        newArrayfavouriteCategory : gettingLsFavourite(),
        newfilterArrayfavouriteCategory : [],
        total : 0
    },
    reducers : {
        handleItemAdd  (state, {payload}) {
            const isItem = state.newArray.some ((item) => item.articul === payload)
            if (!isItem) {
                state.newfilterData = state.data.filter ((item) => item.articul === payload);
                state.newArray.push (...state.newfilterData);
                state.maunt = state.newArray.length;
                localStorage.setItem('basket', JSON.stringify(state.newArray));
            }
        },
        handleCountIcrement : (state, {payload}) => {
                state.newArray.filter ((item) => {
                    if (item.articul === payload) {
                        state.total += item.price
                        state.count += 1
                    }
                })
          
        },
        handleCountDecrement (state, {payload}) {
            if (state.count > 1) {
            
                 state.newArray.filter ((item) => {
                if (item.articul === payload) {
                    state.total -= item.price
                    state.count -= 1
                }
            })
            }
           
        },
     
        handleAddFavouriteItem (state, {payload}) {
            const isItem = state.newArrayfavouriteCategory.some ((item) => item.articul === payload)
            if (!isItem) {
                state.newfilterArrayfavouriteCategory = state.data.filter ((item) => item.articul === payload);
            state.newArrayfavouriteCategory.push (...state.newfilterArrayfavouriteCategory);
            state.mauntFavouriteCategory = state.newArrayfavouriteCategory.length;
            localStorage.setItem('favourite', JSON.stringify(state.newArrayfavouriteCategory));
            }
        },
        deleteCurrentItem  (state, {payload}) {
            state.newArray = state.newArray.filter ((item) => item.articul !== payload);
            state.maunt = state.newArray.length; 
            localStorage.setItem('basket', JSON.stringify(state.newArray));
        },
        deleteCurrentFavouriteItem (state, {payload}) {
            state.newArrayfavouriteCategory = state.newArrayfavouriteCategory.filter ((item) => item.articul !== payload);
            state.maunt = state.newArrayfavouriteCategory.length;
            localStorage.setItem('favourite', JSON.stringify(state.newArrayfavouriteCategory)); 
        }

    },
 
    extraReducers : {
        [gettingData.pending] : (state) => {
            state.isloading = true;
        },
        [gettingData.fulfilled] : (state, {payload}) => {
            state.isloading = false;
            state.data = payload;
        },
        [gettingData.rejected] : (state, {payload}) => {
            state.isloading = false;
            state.errors = payload;
        },
        
    },
});

export const { handleAddCartClick, handleItemAdd, handleCountIcrement, handleCountDecrement, deleteCurrentItem, handleAddFavouriteItem,  deleteCurrentFavouriteItem } = cartsSlice.actions;

export default cartsSlice.reducer;