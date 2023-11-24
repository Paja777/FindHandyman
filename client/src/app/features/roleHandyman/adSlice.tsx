import { createSlice } from "@reduxjs/toolkit";
import plumbing from "../../../assets/plumb.webp";
import plumbing2 from "../../../assets/plumbing.jpg";
import electricity from "../../../assets/el.jpg"
import electricity2 from "../../../assets/electric.png"
import painting from "../../../assets/interior-painting.png"
import painting2 from "../../../assets/painter.jpg"
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../../models/UserModel";
import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img2.jpg"
import img3 from "../../../assets/img3.jpg"
import p1 from "../../../assets/p1.jpg"
import p2 from "../../../assets/p2.png"
import img31 from "../../../assets/imag31.png"
import img32 from "../../../assets/img32.webp"
import painting3 from "../../../assets/painting3.webp"
import painting4 from "../../../assets/painting4.jpg"
import pl1 from "../../../assets/pl1.jpg"
import pl2 from "../../../assets/pl2.webp"
import david1 from "../../../assets/david1.jpg"
import david2 from "../../../assets/david2.jpg"
import puser1 from "../../../assets/puser1.png"
import puser2 from "../../../assets/puser2.png"
import euser1 from "../../../assets/euser1.webp"
import euser2 from "../../../assets/euser2.webp"
import plumbuser1 from "../../../assets/plumbuser1.jpg"
import plumbuser2 from "../../../assets/plumbuser2.webp"


const lorelIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nulla vehicula turpis nec ipsum varius viverra. Sed lobortis mi in odio 
  interdum, in consectetur dui vestibulum. Duis posuere, leo at efficitur 
  porttitor, elit eros vestibulum ex, a posuere purus orci vel libero.`;

const dummyListHandyman = [
    {
      id: uuidv4(),
      name: "Milos",
      description: lorelIpsum,
      category: "painting",
      contact: "065225252",
      rating: 4,
      images: [painting, painting3, painting4, painting2],
    },
    {
      id: uuidv4(),
      name: "Dragan",
      description: lorelIpsum,
      category: "electricity",
      contact: "06522000",
      rating: 4,
      images: [electricity, electricity2, img31, img32],
    },
    {
      id: uuidv4(),
      name: "Bora",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065445588",
      rating: 4,
      images:[plumbing, pl1, pl2, plumbing2],
    },
    {
      id: uuidv4(),
      name: "Pera",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065445577",
      rating: 4,
      images:[p1, p2],
    },
  ];
  const dummyListUser = [
    {
      id: uuidv4(),
      name: "Jovan",
      description: lorelIpsum,
      category: "painting",
      contact: "065225252",
      rating: 4,
      images: [img1, puser1, puser2],
    },
    {
      id: uuidv4(),
      name: "Marko",
      description: lorelIpsum,
      category: "electricity",
      contact: "06522400",
      rating: 4,
      images: [img2, euser1, euser2],
    },
    {
      id: uuidv4(),
      name: "Filip",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065244588",
      rating: 4,
      images:[ img3, plumbuser1, plumbing2],
    },
    {
      id: uuidv4(),
      name: "David",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065233388",
      rating: 4,
      images:[ david1, david2],
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
    handymanAds: dummyListHandyman,
    userAds: dummyListUser,
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
        changeRating: (state, {payload}) => {
          const index = state.handymanAds.findIndex((ad) => ad.id === payload.adId);
          if (index !== -1) state.handymanAds[index].rating =  (state.handymanAds[index].rating + payload.newValue) /2;
          else {const index2 = state.userAds.findIndex((ad) => ad.id === payload.adId);
            state.userAds[index2].rating = (state.userAds[index2].rating + payload.newValue) / 2;
          }
          
          
        }
       
        
    }

})

export const {createAd, uploadImages, changeRating} = adSlice.actions;

// function uuidv4() {
//     throw new Error("Function not implemented.");
// }
