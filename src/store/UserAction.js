const loadingState = {
  loading: true,
  data: null,
  error: null
};

const success = (data) => ({
  loading: false,
  data,
  error: null
});

const error = (error) => ({
  loading: false,
  data: null,
  error
});

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };
    case 'GET_UESR':
      return {
        ...state,
        user: loadingState
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      return state;
  }
};
