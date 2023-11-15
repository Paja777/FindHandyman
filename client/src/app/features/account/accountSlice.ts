import { createSlice } from "@reduxjs/toolkit";


interface AccountState {
  username: string;
  email: string;
  password: string;
  loggedIn: boolean;
  role: string;
  displayedAds: string;
}

const initialState: AccountState = {
  username: "",
  email: "",
  password: "",
  loggedIn: false,
  role: '',
  displayedAds: '',

};


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
        state.displayedAds = '';
    },
    registerUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.role = payload.role;
        state.displayedAds = payload.role;
        localStorage.setItem(`${state.username}`, JSON.stringify(state) )
    },
    loginUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.displayedAds = payload.role;
        state.role = payload.role;    
    },
     setDisplayedAds: (state, {payload}) => {
      state.displayedAds = payload;
       
     },
  },

  
});

export const { signOut, registerUser, loginUser, setDisplayedAds } = accountSlice.actions;
