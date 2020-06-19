import React, { useState } from 'react';
import styled from 'styled-components';
//import axios from 'axios';
//import useAsync from '../custom/useAsync';
//import { useAsync } from 'react-async';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers2 } from '../context/UsersContext';

const ButtonApi = styled.button`
  width: 80px;
  height: 50px;
  /* border-radius: 50%; */
  color: white;
  background: #e599f7;
  border: none;
  outline: none;
  &:hover {
    background: #eebefa;
  }
  &:active {
    background: #da77f2;
  }
`;

// async function getUsers() {
//   console.log('reload:: getUsers');
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return data;
// }

function Users() {
  //const [state, dispatch] = useReducer(reducer, initialState);

  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [toggle, setToggle] = useState(false);

  // const fetchUsers = useCallback(async () => {
  //   try {
  //     dispatch({ type: 'LOADING' });

  //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     console.log('resonse:::', response);
  //     console.log('loading:::', state.loading);

  //     dispatch({ type: 'SUCCESS', data: response.data });
  //   } catch (e) {
  //     console.log('error:::', e);
  //     dispatch({ type: 'ERROR', error: e });
  //   }
  // });

  const [userId, setUserId] = useState(null);
  //const { data, error, isLoading, reload } = useAsync({ promiseFn: getUsers });
  //const { data, error, isLoading, run: reload } = useAsync({ deferFn: getUsers });
  //const [state, refetch] = useAsync(getUsers, [], true);
  //const { loading, data, error } = state;

  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data, loading: isLoading, error } = state.users;
  const fetchData = () => {
    getUsers2(dispatch);
  };

  if (isLoading)
    return (
      <div>
        로딩중... <ButtonApi onClick={fetchData}>API호출</ButtonApi>
      </div>
    );
  if (error) return <div>에러발생</div>;
  if (!data)
    return (
      <div>
        초기값 <ButtonApi onClick={fetchData}>데이터불러오기</ButtonApi>
      </div>
    );

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)} style={{ cursor: 'pointer' }}>
            {user.name}
          </li>
        ))}
      </ul>
      <ButtonApi onClick={fetchData}>API호출</ButtonApi>
      {userId && <User id={userId} />}
    </div>
  );
}

export default Users;
