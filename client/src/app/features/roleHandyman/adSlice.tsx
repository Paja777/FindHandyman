import { createSlice } from "@reduxjs/toolkit";
import { Ad } from "../../models/ad";

interface AdState{
    name: string;
    category: string;
    contact: string;
    serviceName: string;
    servicePrice: string;
    serviceName1: string;
    serviceName2?: string;
    serviceName3?: string;
    servicePrice1: string;
    servicePrice2: string;
    servicePrice3: string;
    description: string;
    alert?: string;
}

const initialState: AdState = {
    name: '',
    category: '',
    contact: '0655555',
    serviceName: '',
    servicePrice: '',
    serviceName1: '',
    serviceName2: '',
    serviceName3: '',
    servicePrice1: '',
    servicePrice2: '',
    servicePrice3: '',
    description: '',
    alert: '',
}


export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        createAd: (state, {payload}) => {
         state.name = payload.name;
         state.category = payload.category;
         state.contact = payload.contact;
         state.serviceName = payload.serviceName;
         state.servicePrice = payload.servicePrice;
         state.serviceName1 = payload.serviceName1;
         state.serviceName2 = payload.serviceName2;
         state.serviceName3 = payload.serviceName3;
         state.servicePrice1 = payload.servicePrice1;
         state.servicePrice2 = payload.servicePrice2;
         state.servicePrice3 = payload.servicePrice3;
         state.description = payload.description;
         state.alert = payload.alert;

        }
    }

})

export const {createAd} = adSlice.actions;