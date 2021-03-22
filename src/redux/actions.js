/* eslint-disable no-shadow,consistent-return */
const PREVIOUS = 'PREVIOUS';
const NEXT = 'NEXT';
const GO_TO_EXERCISE = 'GO_TO_EXERCISE';

export const previousExercise = (number) => ({
  type: PREVIOUS,
  number: number !== 1 ? number - 1 : 1,
});

export const nextExercise = (number) => ({
  type: NEXT,
  number: number + 1,
});

export const goToExercise = (number) => ({
          type: GO_TO_EXERCISE,
          number
        });



// async actions
export function setId() {
  // return async (dispatch) => {
  //   const searchId = await getId();
  //   dispatch({ type: 'SET_ID', searchId });
  // };
}
