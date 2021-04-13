import textbook from '../data/exercises_data';

import { PREV_EXERCISE, NEXT_EXERCISE, GO_TO_EXERCISE } from './actionsTypes';

const initialState = { textbook, exerciseNumber: 1 };

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_EXERCISE:
      return {
        ...state,
        exerciseNumber: action.number,
      };

    case NEXT_EXERCISE:
      return {
        ...state,
        exerciseNumber: action.number,
      };

    case GO_TO_EXERCISE:
      return {
        ...state,
        exerciseNumber: action.number,
      };

    default:
      return state;
  }
};

export default exercisesReducer;
