import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  value: 0,
  points: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
    tokenSignin: (state, action) => {
      state.value += action.payload;
    },
    pointsData: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { signIn, signOut, tokenSignin, pointsData } = userSlice.actions;

export default userSlice.reducer;
