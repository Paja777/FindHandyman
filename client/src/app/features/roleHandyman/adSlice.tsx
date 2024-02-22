import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ad } from "../../models/ad";
import { RootState } from "../../store/configureStore";
import { serviceMaker } from "../../utils/utils";
import axios from "axios";


export const adAdapter = createEntityAdapter<Ad>({
  selectId: (ad) => ad._id,
});

export const fetchAdsAsync = createAsyncThunk<Ad[], void>(
  'ad/fetchAdsAsync',
  async (_, thunkAPI) => {
    try {
      const response = await agent.requests.get('/');
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.respose.data });
    }
  }
);

export const fetchAdAsync = createAsyncThunk<Ad, string>(
  'ad/fetchAdAsync',
  async (productId, thunkAPI) => {
    try {
      const response = await agent.adCatalog.details(productId);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.respose.data });
    }
  }
);

export const updateAdAsync = createAsyncThunk<Ad, any>(
  'ad/updateAdAsync',
  async (data, thunkAPI) => {
    try {
      // console.log(Ad._id, Ad)
      const response = await agent.requests.patch(data._id, data);
      console.log(response)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.respose.data });
    }
  }
);

export const createAd = createAsyncThunk<Ad, any, {state: RootState}>(
  'ad/createAd',
  async (payload, thunkAPI) => {
    // make array of objects { service : price}
    const services = serviceMaker({services: payload.services, prices: payload.prices});
    // Post the ad to the server
    try {
      const response = await agent.requests.post("/", {
        name: payload.name,
        category: payload.category,
        note: payload.note,
        description: payload.description,
        services: services,
        rating: 0,
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
  },
  extraReducers: (builder => {
    builder.addCase(fetchAdsAsync.pending, (state) => {
      state.status = 'pendingFetchProducts';
    });
    builder.addCase(fetchAdsAsync.fulfilled, (state, action) => {
      adAdapter.setAll(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchAdsAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = 'idle';
    });
    builder.addCase(fetchAdAsync.pending, (state) => {
      state.status = 'pendingFetchProducts';
    });
    builder.addCase(fetchAdAsync.fulfilled, (state, action) => {
      adAdapter.setOne(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchAdAsync.rejected, (state, action) => {
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
    builder.addCase(updateAdAsync.pending, (state) => {
      state.status = 'pendingUpdateAd';
    });
    builder.addCase(updateAdAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(updateAdAsync.rejected, (state, action) => {
      state.status = 'idle';
      // Handle the error
    });
  })
});

export const AdSelector = adAdapter.getSelectors((state: RootState) => state.ad);
export const { uploadImages, changeRating, setSearchTerm } = adSlice.actions;