import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { SampleStateInterface } from "redux/slice-states/sample.state";

const initialState: SampleStateInterface = {
  data: []
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    setSampleData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    }
  }
});

export const { setSampleData } = sampleSlice.actions;

export default sampleSlice.reducer;
