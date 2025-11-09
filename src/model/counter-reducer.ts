import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMaxValueAC = createAction<{ value: number }>(
  "counter/set_max_value"
);
export const setMinValueAC = createAction<{ value: number }>(
  "counter/set_min_value"
);
export const setCountAC = createAction<{ count: number }>("counter/set_count");
export const setActiveAC = createAction<{ isActive: boolean }>(
  "counter/set_active"
);
type initialStateType = {
  maxValue: number;
  minValue: number;
  count: number;
  active: boolean;
};

const initialState: initialStateType = {
  maxValue: 5,
  minValue: 1,
  count: 0,
  active: true,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMaxValueAC, (state, action) => {
      state.maxValue = action.payload.value;
    })
    .addCase(setMinValueAC, (state, action) => {
      state.minValue = action.payload.value;
    })
    .addCase(setCountAC, (state, action) => {
      state.count = action.payload.count;
    })
    .addCase(setActiveAC, (state, action) => {
      state.active = action.payload.isActive;
    });
});
