const actionCreate = (state, action) => {
  console.log('acton.todo', action.todo);
  return state.concat(action.todo);
};

const actionToggle = (state, action) => {
  const newtodos = state.map((item) => {
    return item.id === action.id ? { ...item, done: !item.done } : item;
  });
  return newtodos;
};

const actionRemove = (state, action) => {
  const newtodos = state.filter((item) => {
    return item.id !== action.id;
  });

  return newtodos;
};

export const todoReducer = function (state, action) {
  switch (action.type) {
    case 'CREATE':
      return actionCreate(state, action);
    case 'TOGGLE':
      return actionToggle(state, action);
    case 'REMOVE':
      return actionRemove(state, action);
    default:
      return state;
  }
};
