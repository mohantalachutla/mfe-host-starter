import { createSlice } from "@reduxjs/toolkit";
import { Cache } from "@mohantalachutla/mfe-utils";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    cache: new Cache(),
  },
  reducers: {
    setCache: (state, action) => {
      state.cache = action.payload.cache;
    },
  },
});

export default cacheSlice.reducer;
export const { setCache } = cacheSlice.actions;
