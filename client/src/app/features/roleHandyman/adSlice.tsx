import { createSlice } from "@reduxjs/toolkit";
import plumbing from "../../../assets/plumb.webp";
import plumbing2 from "../../../assets/plumbing.jpg";
import electricity from "../../../assets/el.jpg"
import electricity2 from "../../../assets/electric.png"
import painting from "../../../assets/interior-painting.png"
import painting2 from "../../../assets/painter.jpg"
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../../models/UserModel";

const list = [
    {
      id: uuidv4(),
      name: "Milos",
      description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
      category: "painting",
      contact: "065225252",
      images: [painting, painting2],
    },
    {
      id: uuidv4(),
      name: "Dragan",
      description: "Majssads dasdadsas asda ad asdasdasd adsasd ",
      category: "electricity",
      contact: "06522000",
      images: [electricity, electricity2],
    },
    {
      id: uuidv4(),
      name: "Bora",
      description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
      category: "plumbing",
      contact: "065225588",
      images:[ plumbing, plumbing2],
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
    images?: string[];
    handymanAds: UserModel[];
    userAds: UserModel[];
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
    handymanAds: list,
    userAds: [],
}


export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        uploadImages: (state, {payload}) => {
        state.images = [...payload];
        },
        createAd: (state, {payload}) => {
         state.name = payload.name;
         state.id = uuidv4();
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
         const modifiedPayload = {...payload, images: state.images}
         if (payload.category === '') state.userAds = [...state.userAds, modifiedPayload];
         if (payload.category !== '') state.handymanAds = [...state.handymanAds, modifiedPayload];
         
        },
        
    }

})

export const {createAd, uploadImages} = adSlice.actions;

// function uuidv4() {
//     throw new Error("Function not implemented.");
// }
