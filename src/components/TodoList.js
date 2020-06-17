import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  /* flex: 1; ?? flex의 item이 갖고 있는 속성으로써 너비 증가율을 나타냄*/
  padding: 12px 24px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem done={true} />
      <TodoItem done={true} />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

export default TodoList;
