import { responsiveStyle } from 'styled-system';

import injectProps from './injectProps';

export const letterSpacing = responsiveStyle({
  prop: 'letterSpacing',
  cssProperty: 'letterSpacing',
  alias: 'spacing',
});

export const textIndent = responsiveStyle({
  prop: 'textIndent',
  cssProperty: 'textIndent',
  numberToPx: true,
  alias: 'indent',
});

export const cursor = injectProps('cursor');
