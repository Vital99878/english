/* eslint-disable no-shadow,consistent-return */
import { PREV_EXERCISE, NEXT_EXERCISE, GO_TO_EXERCISE } from './actionsTypes';

export const previousExercise = (number) => {
  number = number !== 1 ? number - 1 : 1;
  localStorage.setItem('exercise', number);
  return {
    type: PREV_EXERCISE,
    number,
  };
};

export const nextExercise = (number) => {
  number = number !== 567 ? number + 1 : 567;
  localStorage.setItem('exercise', number);
  return {
    type: NEXT_EXERCISE,
    number,
  };
};

export const goToExercise = (number) => {
  localStorage.setItem('exercise', number);
  return {
    type: GO_TO_EXERCISE,
    number,
  };
};

// async actions
export function setId() {
  // return async (dispatch) => {
  //   const searchId = await getId();
  //   dispatch({ type: 'SET_ID', searchId });
  // };
}
