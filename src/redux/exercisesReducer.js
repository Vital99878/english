import exercises from '../data/exercises_data';
import keys from '../data/keys';
import { PREV_EXERCISE, NEXT_EXERCISE, GO_TO_EXERCISE } from './actionsTypes';

const initialState = { exercises, keys, number: 1 };

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_EXERCISE:
      return {
        ...state,
        number: action.number,
      };

    case NEXT_EXERCISE:
      return {
        ...state,
        number: action.number,
      };

    case GO_TO_EXERCISE:
      return {
        ...state,
        number: action.number,
      };

    default:
      return state;
  }
};

export default exercisesReducer;
