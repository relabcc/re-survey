import { style } from 'styled-system';
import Box from './Box';

export default Box.extend`
  position: absolute;
  ${style({
    prop: 'pointerEvents',
    cssProperty: 'pointerEvents',
  })}
`;
