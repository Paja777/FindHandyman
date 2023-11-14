import { createSlice } from "@reduxjs/toolkit";
import plumbing from "../../../assets/plumb.webp";
import electricity from "../../../assets/el.jpg"
import painting from "../../../assets/interior-painting.png"
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../../models/UserModel";

const list = [
    {
      id: uuidv4(),
      name: "Milos",
      description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
      category: "painting",
      contact: "065225252",
      img: painting,
    },
    {
      id: uuidv4(),
      name: "Dragan",
      description: "Majssads dasdadsas asda ad asdasdasd adsasd ",
      category: "electricity",
      contact: "06522000",
      img: electricity,
    },
    {
      id: uuidv4(),
      name: "Bora",
      description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
      category: "plumbing",
      contact: "065225588",
      img: plumbing,
    },
  ];
interface AdState{
    name: string;
    id: any;
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
    note?: string;
    images?: {}[];
    ads: UserModel[];
}

const initialState: AdState = {
    name: '',
    id: '',
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
    note: '',
    images: [],
    ads: list,
}


export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        createAd: (state, {payload}) => {
         state.name = payload.name;
         state.id = payload.id;
         state.category = payload.category;
        //  state.contact = payload.contact;
         state.serviceName = payload.serviceName;
         state.servicePrice = payload.servicePrice;
         state.serviceName1 = payload.serviceName1;
         state.serviceName2 = payload.serviceName2;
         state.serviceName3 = payload.serviceName3;
         state.servicePrice1 = payload.servicePrice1;
         state.servicePrice2 = payload.servicePrice2;
         state.servicePrice3 = payload.servicePrice3;
         state.description = payload.description;
         state.note = payload.alert;
         state.ads = [...state.ads, payload];
        },
        uploadImages: (state, {payload}) => {
         state.images = [...payload];
        }
    }

})

export const {createAd, uploadImages} = adSlice.actions;

// function uuidv4() {
//     throw new Error("Function not implemented.");
// }
