import { beforeEach, expect, test } from 'vitest';
import { errorsReducer, setMaxErrorAC, setMinErrorAC, type initialStateErrorType } from './errors-reducer';

let startState: initialStateErrorType; 

beforeEach(() => {
	startState = {
    maxError: false,
    minError: false,
  };
})

test('correct errors logic should change maxError status', () => {
	const endState = errorsReducer(startState, setMaxErrorAC({ isError: true }))
	expect(endState.maxError).toBe(true);
	expect(endState.minError).toBe(false);
})

test("correct errors logic should change minError status", () => {
  const endState = errorsReducer(startState, setMinErrorAC({ isError: true }));
  expect(endState.minError).toBe(true);
  expect(endState.maxError).toBe(false); 
});