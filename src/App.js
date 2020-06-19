import React from 'react';
import Users from './components/Users';
import { UsersProvider } from './context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;

//! Todo
// import { createGlobalStyle } from 'styled-components';
// import TodoTemplate from './layouts/TodoTemplate';
// import TodoHead from './components/TodoHead';
// import TodoList from './components/TodoList';
// import TodoCreate from './components/TodoCreate';
// import { TodoProvider } from './context/TodoContext';

// const GlobalStyle = createGlobalStyle`
//   body{background: #e9fac8;}
// `;
/* <TodoProvider>
<GlobalStyle />
<TodoTemplate>
  <TodoHead />
  <TodoList />
  <TodoCreate />
</TodoTemplate>
</TodoProvider> */

//! test
// const FloatContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   align-items: center;
//   /* flex-wrap: wrap;
//   align-content: center; */
//   /* margin-bottom: 10px;
//   ::after {
//     clear: both;
//     content: '';
//     display: block;
//   } */
// `;

// const FloatDiv = styled.div`
//   width: 200px;
//   height: 200px;
//   background: tomato;
//   margin-left: 10px;
//   border: 1px dashed black;
//   /* float: left;
//   width: 200px;
//   height: 200px;
//   background: tomato;
//   margin-left: 10px;
//   border: 1px dashed black; */
// `;

// const FloatDiv2 = styled.div`
//   width: 100px;
//   height: 100px;
//   background: yellow;
//   margin-left: 10px;
//   border: 1px dashed black;
//   /* float: left;
//   width: 200px;
//   height: 200px;
//   background: tomato;
//   margin-left: 10px;
//   border: 1px dashed black; */
// `;

// const CommonDiv = styled.div`
//   width: 200px;
//   height: 200px;
//   background: green;
// `;
