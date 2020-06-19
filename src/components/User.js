import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser2 } from '../context/UsersContext';
//import axios from 'axios';
//import useAsync from '../custom/useAsync';
//import { useAsync } from 'react-async';

//async function getUser(id) {
// async function getUser({ id }) {
//   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

//   return data;
// }

function User({ id }) {
  //const [state] = useAsync(() => getUser(id), [id], false);
  //const { data, error, isLoading: loading } = useAsync({ promiseFn: getUser, id, watch: id });
  //const { loading, data, error } = state;
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser2(dispatch, id);
  }, [dispatch, id]);

  const { loading, error, data } = state.user;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;

  return (
    <div>
      <h1>
        {data.username}, {data.name}
      </h1>
      <p>
        <b>Email:</b>
        {data.email}
      </p>
    </div>
  );
}

export default User;
