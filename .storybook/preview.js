import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 10px;
    }
    
    body {
      font-size: 1.4rem;
      font-family: Roboto, sans-serif;
      color: #141414;
    }
    
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      outline: none;
    }
`;

export const parameters = {
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <Fragment>
      <Story />
      <GlobalStyle />
    </Fragment>
  ),
];
