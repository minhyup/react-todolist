import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../context/TodoContext';

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ced4da;
  font-size: 1.3rem;
  &:hover {
    color: #c92a2a;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCicle = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #ced4da;
  border-radius: 16px;
  font-size: 1rem;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #087f5b;
      color: #087f5b;
    `};
`;

const Text = styled.div`
  flex: 1;
  font-size: 1rem;
  color: #212529;
  ${(props) =>
    props.done &&
    css`
      color: #adb5bd;
    `}
`;

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({ type: 'TOGGLE', id });
  };

  const onRemove = () => {
    dispatch({ type: 'REMOVE', id });
  };

  return (
    <TodoItemBlock>
      <CheckCicle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCicle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
