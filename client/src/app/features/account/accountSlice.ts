import { createSlice } from "@reduxjs/toolkit";


interface AccountState {
  username: string;
  email: string;
  password: string;
  loggedIn: boolean;
}

const initialState: AccountState = {
  username: "",
  email: "",
  password: "",
  loggedIn: false,
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
        ;
    },
    registerUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        localStorage.setItem(`${state.username}`, JSON.stringify(state) )
    },
    loginUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        
    },
  },

  
});

export const { signOut, registerUser, loginUser } = accountSlice.actions;
