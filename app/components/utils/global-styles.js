import { injectGlobal } from 'styled-components';
import { colors } from '../theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${colors.black};
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;

  }

`;
