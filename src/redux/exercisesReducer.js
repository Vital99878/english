import exercises from './exercises'


const initialState = {exercises, number: 1}

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PREVIOUS':

      return {
        ...state,
        number: action.number
      };

    case 'NEXT':
      return {
        ...state,
        number: action.number
      };

    case 'GO_TO_EXERCISE':
      return {
        ...state,
        number: action.number
      };

    default:
      return state;
  }
};

export default exercisesReducer;
