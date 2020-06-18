import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/TodoContext';

const TodoHeadBlock = styled.div`
  border-bottom: 1px solid #868e96;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  .today {
    font-weight: bold;
    font-size: 24px;
    color: #9775fa;
  }
  .day {
    font-size: 10px;
    color: #212529;
  }
  .tasks-left {
    font-size: 10px;
    color: #c92a2a;
  }
`;

function TodoHead() {
  const todos = useTodoState();

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <div className="today">{dateString}</div>
      <div className="day">{dayName}</div>
      <div className="tasks-left">{todos.filter((item) => !item.done).length || '0'}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
