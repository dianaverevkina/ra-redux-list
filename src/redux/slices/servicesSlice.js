import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServicesRequest (state) {
      state.loading = true
      state.error = null
    },
    getServicesSuccess (state, action) {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    getServicesFailure (state, action) {
      state.error = action.payload;
      state.loading = false
    }
  }
})

export const { getServicesRequest, getServicesSuccess, getServicesFailure } = servicesSlice.actions;
export default servicesSlice.reducer; 