import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, counterSlice } from '../model/counter-reducer';
import { errorsReducer, errorsSlice } from '../model/errors-reducer';




// создание store
export const store = configureStore({
  reducer: {
    [errorsSlice.name]: errorsReducer,
    [counterSlice.name]: counterReducer,
  },
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>;
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch;


