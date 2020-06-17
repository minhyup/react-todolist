import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  background: white;
  margin: 32px auto;
  border-radius: 18px;
  box-shadow: 10px 5px 5px #ced4da;


  /* ??? */
  /* display: flex;
  flex-direction: column; */
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
