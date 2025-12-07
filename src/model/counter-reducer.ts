import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  maxValue: number;
  minValue: number;
  count: number;
  active: boolean;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    maxValue: 5,
    minValue: 1,
    count: 0,
    active: true,
  } as initialStateType,
  selectors: {
    selectMinValue: (state) => state.minValue,
    selectMaxValue: (state) => state.maxValue,
    selectActive: (state) => state.active,
    selectCount: (state) => state.count,
  },
  reducers: (create) => ({
    setMaxValueAC: create.reducer<{ value: number }>((state, action) => {
      state.maxValue = action.payload.value;
    }),
    setMinValueAC: create.reducer<{ value: number }>((state, action) => {
      state.minValue = action.payload.value;
    }),
    setCountAC: create.reducer<{ count: number }>((state, action) => {
      state.count = action.payload.count;
    }),
    setActiveAC: create.reducer<{ isActive: boolean }>((state, action) => {
      state.active = action.payload.isActive;
    }),
  }),
});

export const { setActiveAC, setCountAC, setMaxValueAC, setMinValueAC } =
  counterSlice.actions;

  export const { selectMinValue, selectMaxValue, selectActive, selectCount } =
    counterSlice.selectors;

export const counterReducer = counterSlice.reducer;
