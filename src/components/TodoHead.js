import React from 'react';
import styled from 'styled-components';

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
  return (
    <TodoHeadBlock>
      <div className="today">YYYY.MM.DD</div>
      <div className="day">요일</div>
      <div className="tasks-left">1개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
