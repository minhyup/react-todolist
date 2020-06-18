import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../context/TodoContext';
const TodoListBlock = styled.div`
  /* flex: 1; ?? flex의 item이 갖고 있는 속성으로써 너비 증가율을 나타냄*/
  flex: 1;
  padding: 12px 24px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((item) => {
        return <TodoItem key={item.id} id={item.id} text={item.text} done={item.done} />;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
