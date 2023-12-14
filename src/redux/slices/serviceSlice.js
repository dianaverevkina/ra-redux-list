import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
  loading: false,
  error: false,
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getServiceRequest (state) {
      state.loading = true
      state.error = null
    },
    getServiceSuccess (state, action) {
      state.item = action.payload
      state.loading = false
      state.error = null
    },
    getServiceFailure (state, action) {
      state.error = action.payload;
      state.loading = false
    }
  }
})

export const { getServiceRequest, getServiceSuccess, getServiceFailure } = serviceSlice.actions;
export default serviceSlice.reducer; 