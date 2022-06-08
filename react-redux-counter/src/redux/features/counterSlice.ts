import { createSlice } from "@reduxjs/toolkit";
import { IAction } from "../models/IAction";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseWithAmount: (state, action: IAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, increaseWithAmount } = counterSlice.actions;

export default counterSlice.reducer;
