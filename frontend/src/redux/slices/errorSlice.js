import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const errorSlice = createSlice({
  initialState,
  name: "error",
  reducers: {
    setError: (action) => {
      return action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMessage = (state) => state.error;

export default errorSlice.reducer;
