import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: false,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    appInit: () => {},
    appLoaded: (state, action) => {
      state.loaded = action.payload || false;
    },
  },
});

export const { appInit, appLoaded, getCustomers, setCustomers } = slice.actions;

export default slice.reducer;
