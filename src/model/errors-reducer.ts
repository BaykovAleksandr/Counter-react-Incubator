import { createSlice } from "@reduxjs/toolkit";


export type initialStateErrorType = {
  maxError: boolean;
  minError: boolean;
};


export const errorsSlice = createSlice({
  name: "errors",
  initialState: {
    maxError: false,
    minError: false,
  },
  selectors: {
    selectMaxError: (state) => state.maxError,
    selectMinError: (state) => state.minError,
  },
  reducers: (create) => ({
    setMaxErrorAC: create.reducer<{ isError: boolean }>((state, action) => {
      state.maxError = action.payload.isError;
    }),
    setMinErrorAC: create.reducer<{ isError: boolean }>((state, action) => {
      state.minError = action.payload.isError;
    }),
  }),
});

// export const errorsReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setMaxErrorAC, (state, action) => {
//       state.maxError = action.payload.isError;
//     })
//     .addCase(setMinErrorAC, (state, action) => {
//       state.minError = action.payload.isError;
//     });
// });

export const { setMaxErrorAC, setMinErrorAC} = errorsSlice.actions;
export const { selectMaxError, selectMinError} =
    errorsSlice.selectors;

export const errorsReducer = errorsSlice.reducer;