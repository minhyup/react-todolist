import React, { createContext, useReducer, useContext } from 'react';
import { userReducer } from '../store/UserAction';
import axios from 'axios';
import * as api from '../utils/api';
import createAsyncDispatcher from '../utils/asyncActionUtils';

const initialState = {
  users: {
    loading: false,
    error: null,
    data: null
  },
  user: {
    loading: false,
    error: null,
    data: null
  }
};

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const getUsers2 = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser2 = createAsyncDispatcher('GET_USER', api.getUser);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>{children}</UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const context = useContext(UsersStateContext);
  if (!context) {
    throw new Error('Cannot find UsersState Provider');
  }
  return context;
}

export function useUsersDispatch() {
  const context = useContext(UsersDispatchContext);
  if (!context) {
    throw new Error('Cannot find UsersDispatch Provider');
  }
  return context;
}

export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const reponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'GET_USERS_SUCCESS', data: reponse.data });
  } catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USER_ERROR', error: e });
  }
}
