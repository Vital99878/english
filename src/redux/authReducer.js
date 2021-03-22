const initial_state = {};

const authReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'SET_ID':
      return { ...state, searchId: action.searchId };

    default:
      return { todos: initial_state };
  }
};

export default authReducer;
