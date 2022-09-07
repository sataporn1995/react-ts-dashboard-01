import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

const dataSlice = createSlice({
  name: "DATA-SLICE",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>) => [...action.payload],
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
