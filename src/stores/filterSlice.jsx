import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourId: "",
  checkin: "",
  checkout: "",
  days: 0,
  adults: "1",
  children: "",
  roomType: "",
  viewType: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetFilter: (state) => {
      return initialState;
    },
  },
});

export const { setFieldValue, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
