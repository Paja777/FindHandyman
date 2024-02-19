import { createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";

export interface AdState {
  category: string;
  description: string;
  note: string;
  servicePrice: string[];
  images: string[];
  rating: number;
  searchTerm: string;
}

const initialState: AdState = {
  category: "",
  description: "",
  note: "",
  servicePrice: [],
  images: [],
  rating: 0,
  searchTerm: "",
};

export const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    uploadImages: (state, { payload }) => {
      state.images = [...payload];
    },
    createAd: (state, { payload }) => {
      state.category = payload.category;
      state.description = payload.description;
      state.note = payload.alert;
      // forming array of service : price value pairs
      state.servicePrice = payload.services.map(
        (service: string, index: any) => ({
          [service]: payload.prices[index],
        })
      );
      try {
        // posting ad to db
        const response = agent.requests.post("/", {
          ...payload,
          rating: state.rating,
          services: state.servicePrice,
          images: state.images,
        });
      } catch (error) {
        console.log(error);
      }
    },
    changeRating: (state, { payload }) => {
      state.rating = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { createAd, uploadImages, changeRating, setSearchTerm } =
  adSlice.actions;
