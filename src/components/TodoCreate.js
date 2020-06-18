import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../context/TodoContext';

const TodoCreateBlock = styled.div``;
const CreateButton = styled.button`
  background: #51cf66;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  cursor: pointer;
  transform: translate(-50%, 50%);
  transition: 0.125x all ease-in;
  &:hover {
    background: #b2f2bb;
  }
  &:active {
    background: #40c057;
  }

  ${(props) =>
    props.open &&
    css`
      background: #e03131;
      &:hover {
        background: #ffa8a8;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormBlock = styled.div`
  /* width: 100%; */
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: tomato;
  /* width: 100%;
  height: 150px; */
  /* padding: 32px 32px 32px 72px; */
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid black;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onToggle = () => {
    setOpen(!open);
  };

  // 전송
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    dispatch({ type: 'CREATE', todo: { id: nextId.current, text: value, done: false } });
    setOpen(false);
    setValue('');
    nextId.current += 1;
  };

  return (
    <TodoCreateBlock>
      {open && (
        <InsertFormBlock>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할일을 입력하세요." onChange={onChange} value={value} />
          </InsertForm>
        </InsertFormBlock>
      )}
      <CreateButton onClick={onToggle} open={open}>
        <MdAdd />
      </CreateButton>
    </TodoCreateBlock>
  );
}

export default TodoCreate;
