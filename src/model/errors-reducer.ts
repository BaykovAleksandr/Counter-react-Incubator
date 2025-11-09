import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMaxErrorAC = createAction<{ isError: boolean }>(
  "errors/set_max_error"
);
export const setMinErrorAC = createAction<{ isError: boolean }>(
  "errors/set_min_error"
);
export type initialStateErrorType = {
  maxError: boolean;
  minError: boolean;
};

const initialState = {
  maxError: false,
  minError: false,
};

export const errorsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMaxErrorAC, (state, action) => {
      state.maxError = action.payload.isError;
    })
    .addCase(setMinErrorAC, (state, action) => {
      state.minError = action.payload.isError;
    });
});
