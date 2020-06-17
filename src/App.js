import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{background: #e9fac8;}
`;

let test = 'fadfadf';

function App() {
  return (
    <div>
      <GlobalStyle />
      <span>test updateeee</span>
    </div>
  );
}

export default App;
