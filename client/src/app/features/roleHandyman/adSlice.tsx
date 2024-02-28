import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ad } from "../../models/ad";
import { RootState } from "../../store/configureStore";
import { serviceMaker } from "../../utils/utils";
import axios from "axios";

export const adAdapter = createEntityAdapter<Ad>({
  // selectId: (ad) => ad._id,
});

export const fetchAdsAsync = createAsyncThunk<Ad[], void>(
  "ad/fetchAdsAsync",
  async (_, thunkAPI) => {
    try {
      const response = await agent.requests.get("/ad");
      return response;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export const fetchAdAsync = createAsyncThunk<Ad, string>(
  "ad/fetchAdAsync",
  async (productId, thunkAPI) => {
    try {
      const response = await agent.adCatalog.details(productId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response });
    }
  }
);

export const updateAdAsync = createAsyncThunk<Ad, any, { state: RootState }>(
  "ad/updateAdAsync",
  async (data, thunkAPI) => {
    try {
      const user = thunkAPI.getState().ad.user;
      if (!user) {
        return;
      }
      const response = await agent.requests.patch(`/ad/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

// create ad
export const createAd = createAsyncThunk<any, any, { state: RootState }>(
  "ad/createAd",
  async (payload, thunkAPI) => {
    // make array of objects { service : price }
    const services = serviceMaker({
      services: payload.services,
      prices: payload.prices,
    });
    // Post the ad to the server
    try {
      const user = thunkAPI.getState().ad.user;
      if (!user) {
        return;
      }
      const response = await axios.post(
        "/ad",
        {
          name: payload.name,
          category: payload.category,
          note: payload.note,
          description: payload.description,
          services: services,
          rating: 0,
          images: thunkAPI.getState().ad.images,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      return response.data; // Return the posted ad
    } catch (error) {
      console.log(error);
    }
  }
);

export interface AdState {
  user: { email: string; token: string } | null;
  productsLoaded: boolean;
  status: string;
  images: string[];
  rating: number;
  searchTerm: string;
}
const initialState: AdState = {
  user: JSON.parse(localStorage.getItem("user")!),
  productsLoaded: false,
  status: "idle",
  images: [],
  rating: 0,
  searchTerm: "",
};

export const adSlice = createSlice({
  name: "ad",
  initialState: adAdapter.getInitialState(initialState),
  reducers: {
    adUserStatus: (state, { payload }) => {
      if (payload === "") {
        state.user = null;
      } else {
        state.user = { ...payload };
      }
    },
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
  extraReducers: (builder) => {
    builder.addCase(fetchAdsAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    builder.addCase(fetchAdsAsync.fulfilled, (state, action) => {
      adAdapter.setAll(state, action.payload);
      state.status = "idle";
      state.productsLoaded = true;
    });
    builder.addCase(fetchAdsAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchAdAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    builder.addCase(fetchAdAsync.fulfilled, (state, action) => {
      adAdapter.setOne(state, action.payload);
      state.status = "idle";
      state.productsLoaded = true;
    });
    builder.addCase(fetchAdAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(createAd.pending, (state) => {
      state.status = "pendingCreateAd";
    });
    builder.addCase(createAd.fulfilled, (state, action) => {
      // adAdapter.addOne(state, action.payload);
      console.log(action.payload) // Add the posted ad to the state
      state.status = "idle";
    });
    builder.addCase(createAd.rejected, (state, action) => {
      state.status = "idle";
      // Handle the error
    });
    builder.addCase(updateAdAsync.pending, (state) => {
      state.status = "pendingUpdateAd";
    });
    builder.addCase(updateAdAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.productsLoaded = true;
    });
    builder.addCase(updateAdAsync.rejected, (state, action) => {
      state.status = "idle";
      // Handle the error
    });
  },
});

export const AdSelector = adAdapter.getSelectors(
  (state: RootState) => state.ad
);
export const { uploadImages, changeRating, setSearchTerm, adUserStatus } =
  adSlice.actions;
