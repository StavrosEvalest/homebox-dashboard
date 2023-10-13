import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  loading: false,
  page: 0,
  total: 0,
  error: null,
};

export const slice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getCustomers: (state) => {
      state.loading = true;
      state.error = null;
      state.page += 1;
    },
    setCustomers: (state, action) => {
      const { customers, total } = action.payload;
      state.customers = customers;
      state.total = total;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteCustomer: () => {},
    reset: (state) => {
      state.page = 0;
      state.customers = [];
    },
  },
});

export const {
  getCustomers,
  setCustomers,
  setError,
  deleteCustomer,
  reset,
} = slice.actions;

export default slice.reducer;
