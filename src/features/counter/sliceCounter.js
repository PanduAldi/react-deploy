import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = {
  user: "Pandu Aldi RTK",
  counter: 10000,
};

// const userAsync = createAsyncThunk();

const counterRTKSlice = createSlice({
  //nama slice
  name: "counterRTK",
  // initialstate
  initialState: initialStateCounter,
  //reducernya
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementSpec(state, action) {
      state.counter += action.payload;
    },
    decrementSpec(state, action) {
      state.counter = state.counter - action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, reset, decrementSpec, incrementSpec } =
  counterRTKSlice.actions;

export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

export default counterRTKSlice.reducer;
