import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  value: 0,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
    signOut: (state) => {
      state.token = "";
    },
    tokenSignin: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { signIn, signOut, tokenSignin } = userSlice.actions;

export default userSlice.reducer;
