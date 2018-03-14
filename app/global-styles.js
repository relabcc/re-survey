import { injectGlobal } from 'styled-components';

import theme from './components/ThemeProvider/theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: ${theme.font};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background-color: ${theme.colors.background};
  }

  a {
    color: black;
  }
`;
