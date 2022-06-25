import { configureStore } from "@reduxjs/toolkit";

import sampleReducer from "redux/slices/sample.slice";

export const store = configureStore({
  reducer: {
    sample: sampleReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
