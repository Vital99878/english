import exercises from './exercises'

const initialState = {exercises, number: 1}

const exercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSFERS':
      return {
        ...state,
        transfers: action.transfers,
        active_all: action.transfers.length === 4,
        index: 0,
      };

    default:
      return state;
  }
};

export default exercisesReducer;
