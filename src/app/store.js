//dengan menguakan import configureStore createstore() + thunk
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/sliceCounter";

export const store = configureStore({
  reducer: {
    counterRTK: counterSlice,
  },
});
