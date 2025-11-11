import { beforeEach, expect, test } from "vitest";
import {
  counterReducer,
  setActiveAC,
  setCountAC,
  setMaxValueAC,
  setMinValueAC,
  type initialStateType,
} from "./counter-reducer";

let initialState: initialStateType;

beforeEach(() => {
  initialState = {
    maxValue: 5,
    minValue: 1,
    count: 0,
    active: true,
  };
});

test("correct counter logic should change maxValue", () => {
  const endState = counterReducer(initialState, setMaxValueAC({ value: 10 }));
  expect(endState.maxValue).toBe(10);
  expect(endState.minValue).toBe(1);
  expect(endState.count).toBe(0);
  expect(endState.active).toBe(true);
});

test("correct counter logic should not mutate initial state", () => {
  const originalState = { ...initialState };
  counterReducer(initialState, setMaxValueAC({ value: 10 }));
  expect(initialState).toEqual(originalState);
});

test("correct counter logic should change minValue", () => {
  const endState = counterReducer(initialState, setMinValueAC({ value: 3 }));
  expect(endState.maxValue).toBe(5);
  expect(endState.minValue).toBe(3);
  expect(endState.count).toBe(0);
  expect(endState.active).toBe(true);
});

test("correct counter logic should change count", () => {
  const endState = counterReducer(initialState, setCountAC({ count: 4 }));
  expect(endState.maxValue).toBe(5);
  expect(endState.minValue).toBe(1);
  expect(endState.count).toBe(4);
  expect(endState.active).toBe(true);
});

test("correct counter logic should change status", () => {
  const endState = counterReducer(
    initialState,
    setActiveAC({ isActive: false })
  );
  expect(endState.maxValue).toBe(5);
  expect(endState.minValue).toBe(1);
  expect(endState.count).toBe(0);
  expect(endState.active).toBe(false);
});

test("correct counter logic should handle multiple state changes", () => {
  let state = counterReducer(initialState, setMaxValueAC({ value: 10 }));
  state = counterReducer(state, setMinValueAC({ value: 2 }));
  state = counterReducer(state, setCountAC({ count: 5 }));

  expect(state.maxValue).toBe(10);
  expect(state.minValue).toBe(2);
  expect(state.count).toBe(5);
});
