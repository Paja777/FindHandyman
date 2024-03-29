import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ad } from "../../models/ad";
import { RootState } from "../../store/configureStore";
import { serviceMaker } from "../../utils/utils";

export const adAdapter = createEntityAdapter<Ad>({
  selectId: (ad) => ad._id,
});

// all Ads
export const fetchAdsAsync = createAsyncThunk<Ad[], void, { state: RootState }>(
  "ad/fetchAdsAsync",
  async (_, thunkAPI) => {
    const params = new URLSearchParams();
    const searchTerm = thunkAPI.getState().ad.searchTerm;
    const displayedAds = thunkAPI.getState().ad.displayedAds;
    if (searchTerm) params.append("searchTerm", searchTerm);
    if (displayedAds) params.append("displayedAds", displayedAds);
    try {
      const response = await agent.requests.get("/ad", params);
      console.log(response);
      return response;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

// My Ads
export const fetchMyAdsAsync = createAsyncThunk<
  Ad[],
  void,
  { state: RootState }
>("ad/fetchAdsAsync", async (_, thunkAPI) => {
  try {
    const response = await agent.requests.get("/ad/my/ads");
    console.log(response);
    return response;
  } catch (error: any) {
    console.log(error);
    return thunkAPI.rejectWithValue({ error: error });
  }
});

// single Ad
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
// update rating
export const updateAdAsync = createAsyncThunk<any, any, { state: RootState }>(
  "ad/updateAdAsync",
  async (data, thunkAPI) => {
    try {
      const user = thunkAPI.getState().ad.user;
      if (!user) {
        return;
      }
      const response = await agent.requests.patch(
        `/user/rate`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (error: any) {
      console.log(error.data.error);
      return thunkAPI.rejectWithValue({ error: error.data.error });
    }
  }
);

// create ad
export const createAd = createAsyncThunk<Ad, any, { state: RootState }>(
  "ad/createAd",
  async (payload, thunkAPI) => {
    // make array of objects { service : price }
    const services = serviceMaker({
      services: payload.services,
      prices: payload.prices,
    });
    console.log(services);
    // Post the ad to the server
    try {
      const user = thunkAPI.getState().ad.user;
      if (!user) {
        return;
      }
      const response = await agent.requests.post(
        "/ad",
        {
          ...payload,
          rating: 0,
          images: thunkAPI.getState().ad.images,
          services: services,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data);
    }
  }
);

export interface AdState {
  user: {
    email: string;
    token: string;
    role: string;
    category: string;
    username: string;
  } | null;
  productsLoaded: boolean;
  status: string;
  images: string[];
  rating: number;
  searchTerm: string;
  displayedAds: string;
  errorText: string;
}
const initialState: AdState = {
  user: JSON.parse(localStorage.getItem("user")!),
  productsLoaded: false,
  status: "idle",
  images: [],
  rating: 0,
  searchTerm: "",
  displayedAds: "",
  errorText: "",
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
    setLoadingStatus: (state, { payload }) => {
      state.productsLoaded = payload;
    },
    setDisplayedAds: (state, { payload }) => {
      state.displayedAds = payload;
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
      // state.myAds = false;
    });
    builder.addCase(fetchAdsAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchAdAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    builder.addCase(fetchAdAsync.fulfilled, (state, action) => {
      adAdapter.upsertOne(state, action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchAdAsync.rejected, (state, action) => {
      // console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(createAd.pending, (state) => {
      state.status = "pendingCreateAd";
    });
    builder.addCase(createAd.fulfilled, (state, action) => {
      state.status = "idle";
    });
    builder.addCase(createAd.rejected, (state, action) => {
      state.status = "idle";
      // Handle the error
    });
    builder.addCase(updateAdAsync.pending, (state) => {
      state.status = "pendingUpdateAd";
      state.errorText = "";
    });
    builder.addCase(updateAdAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.productsLoaded = true;
    });
    builder.addCase(updateAdAsync.rejected, (state, action: any) => {
      state.status = "idle";
      state.errorText = action.payload.error;

      // Handle the error
    });
  },
});

export const AdSelector = adAdapter.getSelectors(
  (state: RootState) => state.ad
);
export const {
  uploadImages,
  changeRating,
  setSearchTerm,
  adUserStatus,
  setLoadingStatus,
  setDisplayedAds,
} = adSlice.actions;
