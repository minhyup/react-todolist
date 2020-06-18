const actionCreate = (state, action) => {
  return state.concat(action.todo);
};

const actionToggle = (state, action) => {
  return state;
};

export const todoReducer = function (state, action) {
  switch (action.type) {
    case 'CREATE':
      return actionCreate(state, action);
    case 'TOGGLE':
      return actionToggle(state, action);
    default:
      return state;
  }
};
