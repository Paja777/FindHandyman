import { createSlice } from "@reduxjs/toolkit";


interface AccountState {
  username: string;
  email: string;
  password: string;
  loggedIn: boolean;
  role: string;
}

const initialState: AccountState = {
  username: "",
  email: "",
  password: "",
  loggedIn: false,
  role: '',
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
    },
    registerUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.role = payload.role;
        localStorage.setItem(`${state.username}`, JSON.stringify(state) )
    },
    loginUser: (state, { payload }) => {
        state.username = payload.username;
        state.email = payload.email;
        state.password = payload.password;
        state.loggedIn = true;
        state.role = payload.role;    
    },
  },

  
});

export const { signOut, registerUser, loginUser } = accountSlice.actions;
