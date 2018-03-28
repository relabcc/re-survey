import { propTypes } from 'styled-system';

const allPropTypes = Object.keys(propTypes)
  .reduce((a, key) => Object.assign(a, propTypes[key]), {});

export default [
  ...Object.keys(allPropTypes),
  'textIndent',
  'indent',
  'textTransform',
  'letterSpacing',
  'spacing',
  'transform',
  'transition',
  'overflow',
  'overflowX',
  'overflowY',
  'z',
  'zIndex',
  'opacity',
  'alpha',
  'error',
  'hoverSrc',
  'hoverColor',
  'shouldCenter',
  'description',
  'dotRadius',
  'strokeWidthRatio',
  'eventLabel',
];
