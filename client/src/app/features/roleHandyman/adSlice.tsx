import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ad } from "../../models/ad";
import { RootState } from "../../store/configureStore";
import { base64ArrayToBinaryArray, imageComporessor, serviceMaker } from "../../utils/utils";


export const adAdapter = createEntityAdapter<Ad>({
  selectId: (ad) => ad._id,
});

export const fetchProductsAsync = createAsyncThunk<Ad[], void>(
  'ad/fetchProductsAsync',
  async (_, thunkAPI) => {
    try {
      const response = await agent.requests.get('/');
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.respose.data });
    }
  }
);

export const createAd = createAsyncThunk<Ad, any, {state: RootState}>(
  'ad/createAd',
  async (payload, thunkAPI) => {
    console.log('before try1')
    // make array of objects { service : price}
    // const services = serviceMaker({services: payload.services, prices: payload.prices});
    // Compress the images before posting to the server
    // const compressedImages = imageComporessor(thunkAPI.getState().ad.images);
    // const imageArray = base64ArrayToBinaryArray(thunkAPI.getState().ad.images)
    // Post the ad to the server
    console.log('before try2')
    try {
    console.log('before try3')
      const response = await agent.requests.post("/", {
        // name: payload.name,
        // category: payload.category,
        // note: payload.note,
        // description: payload.description,
        // services: services,
        // rating: 0,
        images: thunkAPI.getState().ad.images,
      });
      console.log(response);
      return response; // Return the posted ad
    } catch (error) {
      console.error('Error posting ad:', error);
      throw error;
    }
  }
);

export interface AdState {
  productsLoaded: boolean;
  status: string;
  category: string;
  description: string;
  note: string;
  servicePrice: string[];
  images: string[];
  rating: number;
  searchTerm: string;
}
const initialState: AdState = {
  productsLoaded: false,
  status: 'idle',
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
  initialState: adAdapter.getInitialState(initialState),
  reducers: {
    uploadImages: (state, { payload }) => {
      state.images = [...state.images, ...payload];
    },
    changeRating: (state, { payload }) => {
      state.rating = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
    setAdDetails: (state, { payload }) => {},
  },
  extraReducers: (builder => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'pendingFetchProducts';
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      adAdapter.setAll(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = 'idle';
    });
    builder.addCase(createAd.pending, (state) => {
      state.status = 'pendingCreateAd';
    });
    builder.addCase(createAd.fulfilled, (state, action) => {
      adAdapter.addOne(state, action.payload); // Add the posted ad to the state
      state.status = 'idle';
    });
    builder.addCase(createAd.rejected, (state, action) => {
      state.status = 'idle';
      // Handle the error
    });
  })
});

export const AdSelector = adAdapter.getSelectors((state: RootState) => state.ad);
export const { uploadImages, changeRating, setSearchTerm, setAdDetails } = adSlice.actions;