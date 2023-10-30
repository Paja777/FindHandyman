import { createSlice } from "@reduxjs/toolkit";
import { Ad } from "../../app/models/ad";

interface AdState{
    ad: Ad | null;
}

const initialState: AdState = {
    ad: null
}


export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        createAd: (state, action) => {
         state.ad = action.payload;
        }
    }

})

export const {createAd} = adSlice.actions;