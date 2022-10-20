import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IApplicationSliceState } from "redux/slice-states/application.state";

const initialState: IApplicationSliceState = {
  characters: [],
  comics: []
};

export const applicationSlice = createSlice({
  name: "marvel-application",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<any>) => {
      state.characters = action.payload;
    },

    setComics: (state, action: PayloadAction<any>) => {
      state.comics = action.payload;
    }
  }
});

export const { setCharacters, setComics } = applicationSlice.actions;

export default applicationSlice.reducer;
