import type { RootState } from '../app/store';


export const selectMinValue = (state: RootState) => state.counter.minValue
export const selectMaxValue = (state: RootState) => state.counter.maxValue;
export const selectActive = (state: RootState) => state.counter.active
