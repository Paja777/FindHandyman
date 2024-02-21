import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ad } from "../../models/ad";
import { RootState } from "../../store/configureStore";
import { compressImage } from "../../utils/utils";


export const adAdapter = createEntityAdapter<Ad>({
  selectId: (ad) => ad._id,
});

export const fetchProductsAsync = createAsyncThunk<Ad[], void>(
  'ad/fetchProductsAsync',
  async (_, thunkAPI) => {
    try {
      const response = await agent.requests.get('/');
      console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.respose.data });
    }
  }
);

export const createAd = createAsyncThunk<Ad, any>(
  'ad/createAd',
  async (payload, thunkAPI) => {
    // Compress the images before posting to the server
    const compressedImages = [];
    for (const image of payload.images) {
      try {
        const compressedImage = await compressImage(image, {
          maxWidth: 800, // Adjust according to your needs
          maxHeight: 600, // Adjust according to your needs
          quality: 0.8, // Adjust according to your needs
        });
        compressedImages.push(compressedImage);
      } catch (error) {
        console.error('Error compressing image:', error);
        // If compression fails, use the original image
        compressedImages.push(image);
      }
    }
    // Post the ad to the server
    try {
      const response = await agent.requests.post("/", {
        ...payload,
        images: compressedImages,
      });
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
      state.images = [...payload];
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