const PREVIOUS = 'PREVIOUS';
const NEXT = 'NEXT';

export const previousExercise = (number) => ({
  type: PREVIOUS,
  number: number !== 1 ? number - 1 : 1,
});

export const nextExercise = (number) => ({
  type: NEXT,
  number: number + 1,
});



// async actions
export function setId() {
  // return async (dispatch) => {
  //   const searchId = await getId();
  //   dispatch({ type: 'SET_ID', searchId });
  // };
}
