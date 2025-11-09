import type { RootState } from '../app/store';

export const selectMaxError = (state: RootState) => state.errors.maxError;
export const selectMinError = (state: RootState) => state.errors.minError;