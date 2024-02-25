import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  username: string;
  email: string;
  password: string;
  loggedIn: boolean;
  role: string;
  displayedAds: string;
  category: string;
}

const initialState: AccountState = {
  username: "",
  email: "",
  password: "",
  loggedIn: false,
  role: '',
  displayedAds: '',
  category: '',
}

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    signOut: (state) => {
        state.username = ''
        state.email = "";
        state.password = "";
        state.loggedIn = false; 
        state.role = '';
        state.displayedAds = 'handyman';
        state.category = '';
    },
    registerUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.role = payload.role;
        state.displayedAds = payload.role;
        state.category = payload.category;
        
    },
    loginUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.displayedAds = payload.role;
        state.role = payload.role;
        state.category = payload.category;
        state.displayedAds = payload.role === 'handyman'? 'user' : 'handyman';   
    },
     setDisplayedAds: (state, {payload}) => {
      state.displayedAds = payload;   
     },
  },
 
});

export const { signOut, registerUser, loginUser, setDisplayedAds } = accountSlice.actions;
