import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './layouts/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body{background: #e9fac8;}
`;

// const GlobalStyleDiv = styled.div`
//   background: #e9fac8;
// `;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;

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
